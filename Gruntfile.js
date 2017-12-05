module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: ["assets/js/**/*.js"],
            options: {
                predef: ["document", "console", "$"],
                esnext: true,
                globalstrict: true,
                globals: {},
                browserify: true,
            },
        },
        sass: {
            dist: {
                files: {
                    "assets/css/style.css" : "assets/sass/style.scss"
                },
            },
        },
        watch: {
            javascripts: {
                files: ["assets/js/**/*.js"],
                tasks: ["jshint"],
            },
            sass: {
                files: ["assets/sass/**/*.scss"],
                tasks: ["sass"],
            },
        },
    });

    require("matchdep")
        .filter("grunt-*")
        .forEach(grunt.loadNpmTasks);
    
    grunt.registerTask("default", ["jshint", "sass", "watch"]);
};