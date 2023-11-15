function skillMenbers(){
    this.name = 'skillMenbers';
    this.skill = ['html', 'css', 'js', 'react', 'nodejs'];
    this.show = function(){
        console.log(this.name + ' : ' + this.skill);
    }
    
}