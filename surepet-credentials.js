


module.exports = function(RED){
    function SurePetCredentials(n){
        RED.nodes.createNode(this, n);
        this.username = n.username || this.credentials.username;
        this.password = n.password || this.credentials.password;
    }
    RED.nodes.registerType("surepet-credentials",SurePetCredentials,{
        credentials: {
            username: {type:"text"},
            password: {type:"password"}
        }
    });
}