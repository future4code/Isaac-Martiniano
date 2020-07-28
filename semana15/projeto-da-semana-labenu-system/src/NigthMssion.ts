import { Mission } from "./Mission";

class NightMission extends Mission{
    public setName(name: string ) {
        if(name.indexOf("-na-nigth") !== -1) {
            super.setName(name);
        } else {
            super.setName(name + "-na-nigth")
        }
    }
}