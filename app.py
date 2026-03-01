from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__,
    template_folder='.',  # 使用根目录作为模板文件夹
    static_folder='.'     # 使用根目录作为静态文件夹
)

# ========== 主页路由 ==========
@app.route('/')
@app.route('/index.html')
def index():
    return render_template('index.html')

# ========== 彝族介绍页面 ==========
@app.route('/jieshao.html')
def jieshao():
    return render_template('jieshao.html')

# ========== 传统技艺主页面 ==========
@app.route('/jiyi.html')
def jiyi():
    return render_template('jiyi.html')

# ========== 彝汉双语页面 ==========
@app.route('/shuangyu.html')
def shuangyu():
    return render_template('shuangyu.html')

# ========== 非遗商城页面 ==========
@app.route('/shangcheng.html')
def shangcheng():
    return render_template('shangcheng.html')

# ========== 商业模式页面 ==========
@app.route('/shangye.html')
def shangye():
    return render_template('shangye.html')

# ========== 客户留言页面 ==========
@app.route('/liuyan.html')
def liuyan():
    return render_template('liuyan.html')

# ========== 传统技艺子页面 ==========
@app.route('/yixiu.html')
def yixiu():
    return render_template('yixiu.html')

@app.route('/yidi.html')
def yidi():
    return render_template('yidi.html')

@app.route('/sanxianwu.html')
def sanxianwu():
    return render_template('sanxianwu.html')

@app.route('/hulusheng.html')
def hulusheng():
    return render_template('hulusheng.html')

@app.route('/yangpiguwu.html')
def yangpiguwu():
    return render_template('yangpiguwu.html')

@app.route('/huadeng.html')
def huadeng():
    return render_template('huadeng.html')

@app.route('/alujure.html')
def alujure():
    return render_template('alujure.html')

@app.route('/gushi.html')
def gushi():
    return render_template('gushi.html')

# ========== 静态资源路由 ==========
@app.route('/css/<path:filename>')
def serve_css(filename):
    return send_from_directory('css', filename)

@app.route('/Scripts/<path:filename>')
def serve_scripts(filename):
    return send_from_directory('Scripts', filename)

@app.route('/images/<path:filename>')
def serve_images(filename):
    return send_from_directory('images', filename)

# ========== 运行配置 ==========
if __name__ == '__main__':
    # 生产环境配置
    app.run(
        host='0.0.0.0',      # 允许外部访问
        port=5000,           # 端口号
        debug=False          # 生产环境关闭调试模式
    )