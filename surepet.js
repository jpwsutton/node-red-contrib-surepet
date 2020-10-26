module.exports = function(RED){
    function SurePetNode(config){
        RED.nodes.createNode(this, config);
        this.surepet = RED.nodes.getNode(config.surepet);
        var node = this;
        node.on('input', function(msg){
            msg.payload = {
                surepet: this.surepet
            }
            node.send(msg);
        });
    }
    RED.nodes.registerType("surepet", SurePetNode);
}