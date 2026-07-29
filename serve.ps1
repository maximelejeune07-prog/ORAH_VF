# ORAH Website — simple static file server with HTTP Range support (no Python/Node required)
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 3000

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Output "ORAH Website running at http://localhost:$port"

$mimeTypes = @{
  ".html" = "text/html"; ".htm" = "text/html"; ".css" = "text/css"; ".js" = "application/javascript"
  ".json" = "application/json"; ".png" = "image/png"; ".jpg" = "image/jpeg"; ".jpeg" = "image/jpeg"
  ".webp" = "image/webp"; ".gif" = "image/gif"; ".svg" = "image/svg+xml"; ".ico" = "image/x-icon"
  ".mp4" = "video/mp4"; ".webm" = "video/webm"; ".woff" = "font/woff"; ".woff2" = "font/woff2"
  ".ttf" = "font/ttf"; ".txt" = "text/plain"
}

while ($listener.IsListening) {
  $context = $listener.GetContext()
  $request = $context.Request
  $response = $context.Response
  try {
    $urlPath = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath)
    if ($urlPath -eq "/") { $urlPath = "/index.html" }
    $filePath = Join-Path $root ($urlPath.TrimStart('/'))

    if (-not (Test-Path $filePath -PathType Leaf)) {
      $response.StatusCode = 404
      $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $urlPath")
      $response.OutputStream.Write($notFound, 0, $notFound.Length)
    } else {
      $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
      $contentType = $mimeTypes[$ext]
      if (-not $contentType) { $contentType = "application/octet-stream" }

      $fileLength = (Get-Item $filePath).Length
      $response.Headers.Add("Accept-Ranges", "bytes")
      $response.ContentType = $contentType

      $rangeHeader = $request.Headers["Range"]
      $buffer = New-Object byte[] 65536

      if ($rangeHeader -and $rangeHeader -match "bytes=(\d*)-(\d*)") {
        $start = if ($matches[1]) { [int64]$matches[1] } else { 0 }
        $end = if ($matches[2]) { [int64]$matches[2] } else { $fileLength - 1 }
        if ($end -ge $fileLength) { $end = $fileLength - 1 }

        if ($start -gt $end -or $start -lt 0) {
          $response.StatusCode = 416
          $response.Headers.Add("Content-Range", "bytes */$fileLength")
        } else {
          $chunkLength = $end - $start + 1
          $response.StatusCode = 206
          $response.Headers.Add("Content-Range", "bytes $start-$end/$fileLength")
          $response.ContentLength64 = $chunkLength

          $fs = [System.IO.File]::OpenRead($filePath)
          try {
            [void]$fs.Seek($start, [System.IO.SeekOrigin]::Begin)
            $remaining = $chunkLength
            while ($remaining -gt 0) {
              $toRead = [Math]::Min($buffer.Length, $remaining)
              $read = $fs.Read($buffer, 0, $toRead)
              if ($read -le 0) { break }
              $response.OutputStream.Write($buffer, 0, $read)
              $remaining -= $read
            }
          } finally {
            $fs.Close()
          }
        }
      } else {
        $response.ContentLength64 = $fileLength
        $fs = [System.IO.File]::OpenRead($filePath)
        try {
          while ($true) {
            $read = $fs.Read($buffer, 0, $buffer.Length)
            if ($read -le 0) { break }
            $response.OutputStream.Write($buffer, 0, $read)
          }
        } finally {
          $fs.Close()
        }
      }
    }
  } catch {
    try { $response.StatusCode = 500 } catch {}
  } finally {
    try { $response.OutputStream.Close() } catch {}
  }
}
