import React from 'react';

function Calendar(props) {

    let gapi = window.gapi
    let CLIENT_ID = '809855670413-r308laolsctmfsnpr3nn677h20rmmt5t.apps.googleusercontent.com'
    let API_KEY = "AIzaSyCM9N8TLRSxO0L--taXBLVxN5UksiVy5vE"
    let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    let SCOPES = "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/calendar.events"

    let hsCalId = 'mp6be67pcofkpfp7ds44hjg02c@group.calendar.google.com'

    const handleClick = () => {
        gapi.load('client:auth2', () => {
            console.log('loaded client')

            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES,
            })

            gapi.client.load('calendar', 'v3', () => console.log('bam!'))

            gapi.auth2.getAuthInstance().signIn()
              .then(() => {
                
                let event = {
                    'summary': 'Google I/O 2015',
                    'location': '800 Howard St., San Francisco, CA 94103',
                    'description': 'A chance to hear more about Google\'s developer products.',
                    'start': {
                      'dateTime': '2015-05-28T09:00:00-07:00',
                      'timeZone': 'America/Los_Angeles'
                    },
                    'end': {
                      'dateTime': '2015-05-28T17:00:00-07:00',
                      'timeZone': 'America/Los_Angeles'
                    },
                    'recurrence': [
                      'RRULE:FREQ=DAILY;COUNT=2'
                    ],
                    'attendees': [
                      {'email': 'lpage@example.com'},
                      {'email': 'sbrin@example.com'}
                    ],
                    'reminders': {
                      'useDefault': false,
                      'overrides': [
                        {'method': 'email', 'minutes': 24 * 60},
                        {'method': 'popup', 'minutes': 10}
                      ]
                    }
                  };
      

                    let request = gapi.client.calendar.events.insert({
                        'calendarId': hsCalId, 
                        'resource': event
                    })

                    request.execute(event => {
                        console.log(event)
                        window.open(event.htmlLink)
                    })

                    // gapi.client.calendar.events.list({
                    //     'calendarId': hsCalId,
                    //     'timeMin': (new Date()).toISOString(),
                    //     'showDeleted': false,
                    //     'singleEvents': true,
                    //     'maxResults': 10,
                    //     'orderBy': 'startTime'
                    //   }).then(response => {
                    //     const events = response.result.items
                    //     console.log('EVENTS: ', events)
                    //   })

        })
    })
}

    return (
        <div>
            <button onClick={handleClick}>Test the Calendar</button>
        </div>
    );
}

export default Calendar;