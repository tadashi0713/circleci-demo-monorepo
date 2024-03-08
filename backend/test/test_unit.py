import pytest
from app import app

def test_hello():
    response = app.test_client().get('/api/')
    assert 'CircleCI' == response.get_json()['message']
