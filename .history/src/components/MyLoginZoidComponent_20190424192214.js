import zoid from 'zoid';
import { node, dom } from 'jsx-pragmatic';


let MyLoginZoidComponent = zoid.create({
    tag: 'my-login-component',
    url: 'http://localhost:3000/',

    containerTemplate: function containerTemplate(({ doc, uid, frame, prerenderFrame })) {
        let container = doc.createElement('div'),
        container.id = uid;
        container.appendChild(frame);
        container.appendChild(prerenderFrame);
        return container;
    }
});