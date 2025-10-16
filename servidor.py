#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import http.server
import socketserver
import os
import webbrowser
from urllib.parse import urlparse

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Si la petición es para la raíz, servir index.html
        if self.path == '/':
            self.path = '/index.html'
        
        # Llamar al método padre
        return super().do_GET()

def main():
    PORT = 3000
    
    # Cambiar al directorio del script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Crear el servidor
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        print(f"🚀 Servidor iniciado en http://localhost:{PORT}")
        print(f"📁 Sirviendo desde: {os.getcwd()}")
        print(f"🌐 Abriendo navegador...")
        print(f"⏹️  Para detener: Ctrl+C")
        print("-" * 50)
        
        # Abrir navegador automáticamente
        webbrowser.open(f'http://localhost:{PORT}')
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Servidor detenido")
            httpd.shutdown()

if __name__ == "__main__":
    main()
