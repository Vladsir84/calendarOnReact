const baseUrl = 'https://5f169742a346a00016739042.mockapi.io/api/v1/events';

export const fetchEvents = () =>
    fetch(baseUrl)
        .then(response => response.json());

export const createEvent = eventData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(eventData),
    }).then((response) => response.json());


export const deleteEvent = eventId =>
    fetch(`${baseUrl}/${eventId}`, {
        method: 'DELETE',
    });


