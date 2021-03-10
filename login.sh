-H "Content-Type: application/json" -X POST http://65.1.155.143:8082/api/v1/auth/register
curl -H 'Content-Type: application/json' \
            -X POST http://65.1.122.137:8082/api/v1/auth/login \
            -d '{"username":"crio.do", "password":"learnbydoing"}'
