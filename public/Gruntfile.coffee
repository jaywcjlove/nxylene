module.exports = (grunt) ->
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-stylus'
    grunt.initConfig(
        pkg: grunt.file.readJSON 'package.json' 
        stylus:
            build: 
                options: 
                    linenos: false
                    compress: true
                    # banner: '\/** \n * <%= pkg.name %> - <%= pkg.description %>\n * version <%= pkg.version %> \n * author <%= pkg.author %>  \n**/\n'
                    # //<%= grunt.template.today() %>时间
                files:
                    'build/index.min.css': 'styl/index.styl'
        watch: 
            another: 
                files: ['styl/*.styl']
                tasks: ['stylus']
                options: 
                    livereload: 1244
    )
    grunt.registerTask 'default', ['watch']
