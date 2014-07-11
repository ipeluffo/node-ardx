var markedejs = require('markedejs');
var path = require('path');
var fs = require('fs');

var contentRoot = 'public/content';
var langs = fs.readdirSync(contentRoot);

var detectLanguage = function (req) {
  var lang = req.params.lang || 'en';

  // If no lang is found on content dir, default to english
  if (langs.indexOf(lang) == -1) {
    lang = 'en';
  }

  return lang;
};

var loadContent = function (name, req, res) {
  var contentDir = path.join(contentRoot, detectLanguage(req));
  var file = path.join(contentDir, name + '.md');
  var meta = require(path.join(contentDir, 'meta.json'));
  var menu = require(path.join(contentDir, 'menu.json'));

  markedejs.renderFile(file, {}, function (err, html) {
    res.render('layout', {
      name: name,
      title: meta[name].title,
      menu: menu,
      subtitle: '',
      exercises: require(path.join(contentDir, 'exercises')),
      isExercise: false,
      thumbnail: '',
      content: html
    })
  });
};

exports.intro = function(req, res) {
  loadContent('introduction', req, res);
};

exports.eprimer = function(req, res) {
  loadContent('eprimer', req, res);
};

exports.jsprimer = function(req, res) {
  loadContent('jsprimer', req, res);
};

exports.exercise = function(req, res) {
  var contentDir = path.join(contentRoot, detectLanguage(req));
  var exercises = require(path.join(contentDir, 'exercises'));

	var exIndex = parseInt(req.params.ex, 10) - 1;
  if (exIndex >= 0 && exIndex < exercises.length) {
		var data = exercises[exIndex];
		data.exercises = exercises;
		var exNumber = (exIndex + 1) + "";
		if (exNumber.length == 1) {
			exNumber = "0" + exNumber;
		}
		data.exIndex = exIndex;
		data.circCode = exNumber;
		data.isExercise = true;
		markedejs.renderFile(contentDir + '/exercises/ex' + (exIndex+1) + '.md', {}, function(err, html){
			data.content = html;
			res.render('layout',data);
		});
	} else {
		res.send(404, 'Unable to find exercise ' + req.params.ex);
	}
};
