  module.exports = {
    apps: [
      {
        name: 'sekolah',
        script: 'npm',
        args: 'start',
        cwd: '/home/username/public_html/sekolah', // GANTI dengan path project aktual di server

        // Environment variables
        env: {
          NODE_ENV: 'production',
          PORT: 3000,

          // Generate via: node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
          // NEXT_SERVER_ACTIONS_ENCRYPTION_KEY: 'your-base64-32-byte-key-here',

          // Deployment ID untuk version skew protection (isi saat deploy)
          // DEPLOYMENT_VERSION: 'v1.0.0-20260819',
        },

        // Process management
        instances: 1,              // Set 'max' untuk cluster mode (butuh shared cache & encryption key)
        exec_mode: 'fork',         // 'fork' untuk single instance, 'cluster' untuk multi-instance
        watch: false,              // Disable watch di production
        max_memory_restart: '1G',  // Restart jika memory > 1GB
        restart_delay: 5000,       // Delay 5 detik sebelum restart

        // Graceful shutdown untuk Next.js 16+ (after() callbacks)
        kill_timeout: 30000,       // Tunggu 30s untuk graceful shutdown
        listen_timeout: 10000,     // Timeout listen
        shutdown_with_message: true,

        // Auto restart
        autorestart: true,
        max_restarts: 10,          // Max 10 restart dalam window waktu
        min_uptime: '10s',         // Minimal uptime sebelum dianggap restart loop

        // Logs - GANTI path logs sesuai server
        error_file: '/home/username/logs/sekolah-error.log',
        out_file: '/home/username/logs/sekolah-out.log',
        log_file: '/home/username/logs/sekolah-combined.log',
        time: true,                // Timestamp di log
        log_date_format: 'YYYY-MM-DD HH:mm:ss Z',

        // Merge logs untuk cluster mode
        merge_logs: true,

        // Source map support untuk error stack traces
        source_map_support: true,

        // PM2 metrics
        pmx: true,

        // Interpreter args (opsional, untuk tuning Node.js)
        node_args: '--max-old-space-size=1024', // Limit heap 1GB
      }
    ],

    // Deploy configuration (opsional, untuk pm2 deploy)
    deploy: {
      production: {
        user: 'username',
        host: 'your-server.com',
        ref: 'origin/main',
        repo: 'git@github.com:username/sekolah.git',
        path: '/home/username/public_html/sekolah',
        'pre-deploy-local': '',
        'post-deploy': 'npm install --production && npm run build && pm2 reload ecosystem.config.js --env production',
        'pre-setup': '',
      }
    }
  };