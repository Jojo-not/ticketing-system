<?php

return [



    'supports_credentials' => false,

    'allowed_origins' => ['http://localhost:3000'],

    'allowed_origins_patterns' => [],

    'allowed_methods' => ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  
    
    'allowed_headers' => ['*'],  

    'exposed_headers' => [],
    
    'max_age' => 0,

    'hosts' => [],
];
