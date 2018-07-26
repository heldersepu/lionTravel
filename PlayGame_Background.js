function PGBackGround()
{
    this.imgBackgroundBlue = resourcePreLoader.GetImage("img/game_background_blue.png");
    this.posCloud = 0;
    this.speedCloud = 0.5;
}

PGBackGround.prototype.Update = function()
{
    this.posCloud -= this.speedCloud;
    
    if(this.posCloud < -(800+400))
    {
        this.posCloud = 800;
    }
};

PGBackGround.prototype.RenderLayerFront = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
};

PGBackGround.prototype.RenderLayerBack = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    
    Context.drawImage(this.imgBackgroundBlue, 0, 0);

};
