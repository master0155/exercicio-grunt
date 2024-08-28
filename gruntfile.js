module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            developer:{
                files:{
                    'main.css':'main.less'
                }
            }
        },
        uglify:{
            target:{
                files:{
                    'dist/scripts/main.min.js': 'main.js'
                }
            }
        }
    })
    grunt.registerTask('olaGrunt',function(){
        const done = this.async();
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['less', 'uglify']);
}