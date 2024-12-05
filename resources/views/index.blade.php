<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CloneGPT</title>
    <link rel="icon" href="{{ asset('img/icon.png') }}">
</head>
<body>
    <div id="app"></div>
    @vite(['resources/js/app.js'])
<script>
    window.BASE_URL = "{{ config('app.url') }}{{ ':' . request()->getPort() }}";
</script>
</body>
</html>