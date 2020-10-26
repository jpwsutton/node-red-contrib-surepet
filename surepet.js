module.exports = function(RED){
    "use strict"
    var SurePet = require('sure-pet-care-client');

    function SurePetNode(config){
        RED.nodes.createNode(this, config);
        this.surepet = RED.nodes.getNode(config.surepet);
        var node = this;
        node.on('input', function(msg){
            this.surepet.client.getPets().then((pets) =>{
                msg.payload = {
                    pets: pets
                }
                node.send(msg)
            })/*
            msg.payload = {
                surepet: this.surepet,
                pets: 
            }
            node.send(msg);*/
        });
    }
    RED.nodes.registerType("surepet", SurePetNode);



    function SurePetCredentials(n){
        RED.nodes.createNode(this, n);
        this.username = n.username || this.credentials.username;
        this.password = n.password || this.credentials.password;
        this.client = new SurePet.SurePetCareClient();
        if (this.username && this.password){
            this.log("We have a username and password, attempting to authenticiate.")
            try{
                this.client.authenticate(this.username, this.password);
                this.status({fill:"green",shape:"dot",text:"Connected."});
            } catch (err){
                this.status({fill:"red",shape:"ring",text:err});
            }
           
        }
    }
    RED.nodes.registerType("surepet-credentials",SurePetCredentials,{
        credentials: {
            username: {type:"text"},
            password: {type:"password"}
        }
    });
}