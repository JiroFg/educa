# command to create fixtures from database app: 
python manage.py dumpdata courses --indent=2 --output=courses/fixtures/subjects.json 

# you can specify the model by this way:
python manage.py dumpdata courses.subject --indent=2 --output=courses/fixtures/subjects.json 

# you can load the data from fixtures with this command:
python manage.py loaddata subjects.json

> `docker run -it --rm --name memcached -p 11211:11211 memcached:1.6.26 -m 64`