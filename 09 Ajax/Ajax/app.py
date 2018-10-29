import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        # self.write("Hello, world")
        self.render("index.html")
    def post(self, *args, **kwargs):
        a = self.get_argument("a")
        b = self.get_argument("b")
        res = float(a) + float(b)  # 计算
        return_data = {"result": res}   # 构造json数据
        self.write(return_data)
if __name__ == "__main__":
    application = tornado.web.Application([
        (r"/index", MainHandler),
    ])
    application.listen(8888)
    tornado.ioloop.IOLoop.current().start()