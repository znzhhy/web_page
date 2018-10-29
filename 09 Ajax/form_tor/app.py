import tornado.ioloop
import tornado.web


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("index.html")
    def post(self, *args, **kwargs):
        print(self.get_argument("usr"))
        print(self.get_argument("psw"))
        self.write("验证成功，可以登录")


if __name__ == "__main__":
    application = tornado.web.Application([
        (r"/index", MainHandler),
    ])
    application.listen(8888)
    tornado.ioloop.IOLoop.current().start()