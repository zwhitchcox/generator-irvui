'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _s = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
	  initializing: function () {
	    this.pkg = require('../../package.json');
	  },
	  prompting: function(){
	  	var done = this.async();

	  	this.log(yosay(
	      'Welcome to the solid ' + chalk.red('IRVUI Web') + ' generator!'
	    ));

	    var prompts = [{
		      name:'projectName',
		      message:'Project Name',
		      default:'IRVUI-Web'
		}];

		this.prompt(prompts, function (props) {
	      props.name = _s.strLeft(props.projectName, '.');

	      this.props = props;

	      done();
	    }.bind(this));

	  },
	  writing:{
	  	app: function(){
	  		this.fs.copyTpl(
		        this.templatePath('_package.json'),
		        this.destinationPath('package.json'),
		        this.props
	      	);
		  	this.fs.copyTpl(
		        this.templatePath('_bower.json'),
		        this.destinationPath('bower.json'),
		        this.props
	      	);
	      	this.fs.copyTpl(
		        this.templatePath('_.bowerrc'),
		        this.destinationPath('.bowerrc'),
		        this.props
	      	);
		     this.fs.copy(
		        this.templatePath('_gulpfile.js'),
		        this.destinationPath('gulpfile.js')
		    );
		     this.fs.copy(
		        this.templatePath('tasks/**/*'),
		        this.destinationPath('tasks')
		    );
		     this.fs.copy(
		        this.templatePath('client/**/*'),
		        this.destinationPath('client')
		    );
	        this.fs.copy(
		        this.templatePath('server/**/*'),
		        this.destinationPath('server')
	        );	      	

	  	},
  	    install: function () {
	    	this.installDependencies();
	    } 
	  }
});