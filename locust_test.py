from locust import HttpUser, task, between
import requests
import json

class WebsiteUser(HttpUser):
    wait_time = between(1, 2)

    @task
    def fetch_posts(self):
        self.client.execute_script("fetchAndDisplayPosts()")

    @task
    def fetch_comments(self):
        self.client.execute_script("fetchAndDisplayComments()")

    @task
    def fetch_albums(self):
        self.client.execute_script("fetchAndDisplayAlbums()")

    @task
    def fetch_photos(self):
        self.client.execute_script("fetchAndDisplayPhotos()")

    @task
    def filter_posts(self):
        min_char_count = 100
        max_char_count = 200
        script = f"filterPostsByCharCount({min_char_count}, {max_char_count})"
        self.client.execute_script(script)
