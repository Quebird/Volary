/// <reference path="../instances/AInstance.ts" />
module Volary {

    /**
     * Abstract implementation of worlds.
     */
    export abstract class AWorlds extends AInstance implements IWorlds {
        
        public volary : IVolary;
        
        public worlds : IWorld[];

        constructor() 
        {
            super();
        }
        protected initInstance(type: string, typeInstanceIndex: number)
        {
            super.initInstance(type, typeInstanceIndex);
        }
        
        public createWorld(x : number, y : number, z : number, width : number, height : number, depth : number) : IWorld
        {
            var world : IWorld;
            
            world = new World(this.volary, this, x, y, z, width, height, depth);
            this.addWorld(world);
            return world;
        }
        public getWorldByInstanceId(id : string) : IWorld
        {
            var worldOrNull : IWorld = null;
            
            for(var index = 0; index < this.worlds.length; ++index)
            {
                var world : IWorld = this.worlds[index];
                if(world.getId().valueOf() == id.valueOf())
                {
                    worldOrNull = world;
                    break;
                }
            }
            
            return worldOrNull;
        }

        public deleteWorld(world : IWorld) : void
        {
            this.removeWorld(world);
        }

        protected addWorld(world : IWorld) : void
        {
            this.worlds.push(world);
        }
        protected removeWorld(world : IWorld) : void
        {
            var index = this.worlds.indexOf(world);
            this.worlds.splice(index, 1);
        }
        

    }
}

