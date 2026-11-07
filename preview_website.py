"""
Prakrutik Tattva - Local Preview Server
Run this script to launch and view the production website in your default browser:
    python preview_website.py
"""

import http.server
import socketserver
import os
import webbrowser

PORT = 5174
DIST_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist")

if not os.path.exists(DIST_DIR):
    print("Error: 'dist' directory not found. Please run 'npm run build' first.")
    exit(1)

os.chdir(DIST_DIR)

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    url = f"http://localhost:{PORT}"
    print(f"==================================================")
    print(f"🌿 Prakrutik Tattva website preview is running!")
    print(f"👉 Local URL: {url}")
    print(f"Press Ctrl+C to stop the preview server.")
    print(f"==================================================")
    webbrowser.open(url)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping preview server. Goodbye!")
