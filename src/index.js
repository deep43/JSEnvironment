/**
 * Created by dhazra on 11/26/2017.
 */
import '../index.css';
import {getUsers, deleteUser} from './api/usersApi';

/*eslint-disable no-console*/

getUsers().then((res)=> {
    let userBody = '';
    res.forEach(user=> {
        userBody += '<tr>' +
            '<td><a href="#" data-id=' + user.id + ' class="delete-user">Delete</a></td>' +
            '<td>' + user.id + '</td>' +
            '<td>' + user.firstName + '</td>' +
            '<td>' + user.lastName + '</td>' +
            '<td>' + user.email + '</td>' +
            '</tr>'
    });

    global.document.getElementById('users').innerHTML = userBody;

    const userLinkList = global.document.getElementsByClassName('delete-user');

    Array.from(userLinkList, link=>{
        link.onclick = event=>{
            const element = event.target;
            event.preventDefault();
            event.stopPropagation();

            deleteUser(element.attributes['data-id'].value);

            const row = element.parentNode.parentNode;

            row.parentNode.removeChild(row);
        }
    });
});
