@component('mail::message')
{{ $data['title'] }}


Hello! <br/>

{{ $data['body'] }}

@component('mail::button', ['url' => 'http:127.0.0.1:5501/change_password.html?token='.$data['token'] ])
Verify Email
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
