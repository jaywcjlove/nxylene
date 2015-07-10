module.exports = (grunt) ->
    grunt.initConfig(
        pkg: grunt.file.readJSON 'package.json' 
        uglify:
            app_task: 
                options: 
                    beautify: false
                    mangle: true #不混淆变量名
                    compress:false #打开或关闭使用默认选项源压缩。
                files:
                    'themes/default/source/build/contact.min.js': [
                        'bower_components/jslite/build/JSLite.min.js',
                        'themes/default/source/MDEditor/build/MDEditor.min.js',
                        'themes/default/source/js/contact.js'
                    ]
                    'themes/default/source/build/login.min.js': [
                        'bower_components/jslite/build/JSLite.min.js',
                        'themes/default/source/js/login.js'
                    ]
        stylus:
            options: 
                linenos: false
                compress: true
                # banner: '\/** \n * <%= pkg.name %> - <%= pkg.description %>\n * version <%= pkg.version %> \n * author <%= pkg.author %>  \n**/\n'
                # //<%= grunt.template.today() %>时间
            system: 
                files:
                    'themes/default/source/build/system.min.css':'themes/default/source/styl/system.styl'
            indexs:
                files:
                    'themes/default/source/build/index.min.css':'themes/default/source/styl/index.styl'
            login:
                files:
                    'themes/default/source/build/login.min.css':[
                        'themes/default/source/styl/login.styl'
                    ]
            system_page:
                files:
                    'themes/default/source/build/system_page.min.css': [
                        'themes/default/source/styl/system_page.styl'
                        'themes/default/source/MDEditor/themes/default/stylus/MDEditor.styl'
                    ]
        watch: 
            another: 
                files: ['themes/default/source/**/*.styl','themes/default/source/js/*.js']
                tasks: ['stylus','uglify']
                options: 
                    livereload: true
        nodemon: 
            dev: 
                script: 'app.js'
                options: 
                    args: ['dev']
                    nodeArgs: ['--debug']
                    callback: (nodemon) ->
                        nodemon.on 'log', (event) ->
                            console.log(event.colour)
                    env: 
                        PORT: '8181'
                    cwd: __dirname
                    ignore: ['node_modules/**','bower_components/**','doc/**']
                    debug:true
                    ext: 'js,coffee,ejs'
                    watch: ['*','themes/default/views/*']
                    delay: 500
                    legacyWatch: true
        concurrent: 
            target: 
                tasks: ['nodemon','watch']
                options: 
                    logConcurrentOutput: true
    )
    grunt.loadNpmTasks 'grunt-concurrent'
    grunt.loadNpmTasks 'grunt-nodemon' 
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-stylus'
    grunt.loadNpmTasks 'grunt-contrib-uglify'
    grunt.option('force',true)
    grunt.registerTask 'default', ['concurrent:target']
