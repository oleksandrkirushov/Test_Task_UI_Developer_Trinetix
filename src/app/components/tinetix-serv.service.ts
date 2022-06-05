import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable() //{ providedIn: 'root' }
export class TrinetixServices {
    constructor(private http: HttpClient) {}

    getTrinetixServ() {
        return this.http.get('assets/trinetix-serv.json');
    }

    services = [
        {
            id: '1',
            name: 'Mobile Apps',
            description:
                'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.',
            picture: '../../assets/images/img_mobil-apps.png',
            helpUrl: 'http://www.contoso.com/help',
        },
        {
            id: '2',
            name: 'Web Services',
            description:
                'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.',
            picture: '../../assets/images/img_wev-services.png',
            helpUrl: 'http://www.contoso.com/help',
        },
        {
            id: '3',
            name: 'Augmented Reality',
            description:
                'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.',
            picture: '../../assets/images/img_augmented-reality.png',
            helpUrl: 'http://www.contoso.com/help',
        },
        {
            id: '4',
            name: 'UX/UI Design',
            description:
                'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.',
            picture: '../../assets/images/img_UX-UI-Design.png',
            helpUrl: 'http://www.contoso.com/help',
        },
        {
            id: '5',
            name: 'Development',
            description:
                'We are a nimble team of designers, developers, and strategists who are passionate about helping our clients achieve their goals and grow their brands.',
            picture: '../../assets/images/img_development.png',
            helpUrl: 'http://www.contoso.com/help',
        },
    ];
}