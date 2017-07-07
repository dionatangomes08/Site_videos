import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../lib/banco.js';
import './main.html';

Template.comentario.helpers({
    post: function(){
        return comentarios.find({});
    }
});
Template.comentario.events({
    'click #janela_coment':function(e){
      $("#modal_form").modal('show');
    }
});
Template.janela_cadastro.events({
    'submit #form_cadastro': function(event){
      form_postagem = $("#postagem").val();
      comentarios.insert({created: new Date(), nome: Meteor.user().username, postagem: form_postagem});
      $("#modal_form").modal('hide');
      return false; 
    }
});