# Servidor Web Simple en PowerShellhttp
# Ejecutar con: .\server.ps1

$port = 3000
$path = Get-Location

Write-Host "🚀 Iniciando servidor web..." -ForegroundColor Green
Write-Host "📁 Directorio: $path" -ForegroundColor Yellow
Write-Host "🌐 URL: ://localhost:$port" -ForegroundColor Cyan
Write-Host "⏹️  Para detener: Ctrl+C" -ForegroundColor Red
Write-Host ""

# Crear listener HTTP
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "✅ Servidor iniciado correctamente en puerto $port" -ForegroundColor Green
    
    # Abrir navegador automáticamente
    Start-Process "http://localhost:$port"
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        # Obtener la ruta solicitada
        $localPath = $request.Url.LocalPath
        if ($localPath -eq "/") {
            $localPath = "/index.html"
        }
        
        # Construir ruta del archivo
        $filePath = Join-Path $path $localPath.TrimStart('/')
        
        Write-Host "📄 Solicitado: $localPath" -ForegroundColor Gray
        
        if (Test-Path $filePath) {
            # Archivo encontrado
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            
            # Determinar tipo de contenido
            $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
            switch ($extension) {
                ".html" { $response.ContentType = "text/html; charset=utf-8" }
                ".css"  { $response.ContentType = "text/css; charset=utf-8" }
                ".js"   { $response.ContentType = "application/javascript; charset=utf-8" }
                ".json" { $response.ContentType = "application/json; charset=utf-8" }
                ".png"  { $response.ContentType = "image/png" }
                ".jpg"  { $response.ContentType = "image/jpeg" }
                ".jpeg" { $response.ContentType = "image/jpeg" }
                ".gif"  { $response.ContentType = "image/gif" }
                ".ico"  { $response.ContentType = "image/x-icon" }
                default { $response.ContentType = "text/plain; charset=utf-8" }
            }
            
            $response.StatusCode = 200
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            # Archivo no encontrado
            $notFoundHtml = @"
<!DOCTYPE html>
<html>
<head>
    <title>404 - Archivo no encontrado</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        h1 { color: #e74c3c; }
    </style>
</head>
<body>
    <h1>404 - Archivo no encontrado</h1>
    <p>El archivo <strong>$localPath</strong> no existe.</p>
    <p><a href="/">Volver al inicio</a></p>
</body>
</html>
"@
            
            $content = [System.Text.Encoding]::UTF8.GetBytes($notFoundHtml)
            $response.ContentLength64 = $content.Length
            $response.ContentType = "text/html; charset=utf-8"
            $response.StatusCode = 404
            $response.OutputStream.Write($content, 0, $content.Length)
        }
        
        $response.Close()
    }
} catch {
    Write-Host "❌ Error: $($_.Exception.Message)" -ForegroundColor Red
} finally {
    $listener.Stop()
    Write-Host "🛑 Servidor detenido" -ForegroundColor Yellow
}
