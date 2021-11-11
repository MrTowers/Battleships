export class Network {
    static emit(event, data = {}, respond) {
        const x = new XMLHttpRequest();
        x.open("post", "/LEN");
        const obj = { event: event, data: data };
        x.onload = () => {
            respond(JSON.parse(x.responseText));
        };
        x.send(JSON.stringify(obj));
        //to nie dziala jak cos X D
    }
}
