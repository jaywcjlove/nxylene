module.exports = (grunt) ->
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-stylus'
    grunt.loadNpmTasks 'grunt-contrib-uglify'
    grunt.initConfig(
        pkg: grunt.file.readJSON 'package.json' 
        uglify:
            app_task: 
                options: 
                    beautify: false
                    mangle: true #不混淆变量名
                    compress:false #打开或关闭使用默认选项源压缩。
                files:
                    'build/contact.min.js': [
                        'node_modules/jslite/build/JSLite.min.js',
                        'node_modules/marked/marked.min.js',
                        'js/contact.js'
                    ]
        stylus:
            build: 
                options: 
                    linenos: false
                    compress: true
                    # banner: '\/** \n * <%= pkg.name %> - <%= pkg.description %>\n * version <%= pkg.version %> \n * author <%= pkg.author %>  \n**/\n'
                    # //<%= grunt.template.today() %>时间
                files:
                    'build/index.min.css': 'styl/index.styl'
                    'build/system.min.css': 'styl/system.styl'
                    'build/system_page.min.css': [
                        # 'styl/form.styl'
                        'styl/system_page.styl'
                    ]
        watch: 
            another: 
                files: ['styl/*.styl','js/*.js']
                tasks: ['stylus','uglify']
                options: 
                    livereload: 1244
    )
    grunt.registerTask 'default', ['watch']
