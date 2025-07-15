// interface describing the class structure
interface studentclassinterface {
    workonhomework():string;
    display():string;
}
// interface describing the constructor
interface studentconstructor{
    new(firstname: string , lastname: string): studentclassinterface;
}

// class implementing the interfaces
class studentclass implements studentclassinterface{
    private firstname: string;
    private lastname: string;

    constructor (firstname: string, lastname: string){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    workonhomework(): string {
        return 'currently working';
    }
    display(): string {
        return this.firstname;

    }
}


