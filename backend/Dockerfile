FROM python:3.9.5-buster

WORKDIR /workspace

ENV TZ="Asia/Tokyo"

COPY Pipfile Pipfile.lock ./

RUN apt-get update && apt-get upgrade -y

RUN pip3 install --upgrade pip \
    && pip3 install pipenv uwsgi \
    && pipenv install --deploy --system

COPY app.py uwsgi.ini ./

RUN groupadd -g 10001 uwsgi \
    && useradd -u 10001 -g uwsgi flask
USER flask

CMD [ "uwsgi", "--ini", "/workspace/uwsgi.ini" ]
