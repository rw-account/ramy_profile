from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def profile():
    # Profile data
    profile_data = {
        'name': 'رامي وهيب',
        'title': 'Bug Bounty Hunter',
        'description': 'صائد ثغرات امنية',
        'avatar': '/static/images/me.jpg',
        'initials': 'أح'
    }
    
    # Navigation items
    nav_items = [
        {'id': 'about', 'label': 'نبذة عني'},
        {'id': 'projects', 'label': 'ابرز انجازاتي بفضل الله'}
    ]
    
    # About content
    about_paragraphs = [
        'باحث ثغرات مهتم باكتشاف <span class="text-foreground font-medium">المشكلات الأمنية</span> وتحليلها و<span class="text-foreground font-medium">الإبلاغ عنها بشكل مسؤول</span>، مع سعي مستمر لتطوير المهارات وبناء <span class="text-foreground font-medium">خبرة حقيقية</span> في المجال الأمني.'
    ]
    
    # Projects data
    projects = [
        {
            'title': 'BurpSuite Tutorials',
            'description': 'دورة لتعلم اداة Burp Suite  من قناة داؤود يوسف على اليوتيوب',
            'image': '/static/images/BurpSuite_Comunity_Edition.svg.png',
            'url': 'https://www.youtube.com/playlist?list=PL4S940IsHJYV5gFmhh8vNqTbeUFqDktSh'
        },
        {
            'title': 'دورة تعلم لغة الجافا سكربت',
            'description': 'دورة لتعلم لغة الجافا سكربت من قناة الزيرو على اليوتيوب.',
            'image': '/static/images/elzero_js.png',
            'url': 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv'
        },
        {
            'title': 'موقع لإدارة المخازن',
            'description': 'تطبيق ويب لإدارة المخازن مبني باستخدام Flask و Bootstrap يركز على الحماية من الثغرات الأمنية مثل XSS و CSRF و SQLi.',
            'image': '/static/images/inventory_management.png',
            'url': 'https://ramywaheeb.pythonanywhere.com'
        },
        {
            'title': 'Linux & Windows Fundamentals من TryHackMe',
            'description': 'اساسيات لينكس و ويندوز من TryHackMe.',
            'image': '/static/images/tryhackme.png',
            'url': 'https://tryhackme.com/module/linux-fundamentals'
        },
        {
            'title': 'كورس الـ Git و GitHub من قناة الزيرو',
            'description': 'كورس لتعلم Git و GitHub من قناة الزيرو على اليوتيوب.',
            'image': '/static/images/github_elzero.png',
            'url': 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAw4eOj58MZPakHjaO3frVMF'
        },
        {
            'title': 'Ramy Store',
            'description': 'رامي ستور متجر إلكتروني مبني بـ Flask وBootstrap، يدعم عرض وإدارة المنتجات، تسجيل المستخدمين، سلة مشتريات، البحث، العروض المتغيرة، وواجهة إدارة CRUD مع دعم رفع الصور.',
            'image': '/static/images/ramy_store.png',
            'url': 'https://ramyhosting.pythonanywhere.com/'
        },
        {
            'title': 'Flask Quickstart & Tutorial',
            'description': 'ذاكرت الـ Quickstart  Flask و ذاكرت الـ Tutorial  Flask من موقع Flask الرسمي.',
            'image': '/static/images/flask_logo.png',
            'url': 'https://flask.palletsprojects.com/en/stable/'
        },
        {
            'title': 'Bootstrap 5 Tutorial',
            'description': ' كراش كورس Bootstrap من اليوتيوب وايضا قمت باعادة كتابه المشروع اللي عملته اثناء تعلم الكورس.',
            'image': '/static/images/bootstrap.png',
            'url': 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR'
        },
        {
            'title': 'Crash Course HTML & CSS',
            'description': 'كراش كورس HTML & CSS من قناه كودزيلا على اليوتيوب.',
            'image': '/static/images/htmlandcss.png',
            'url': 'https://www.youtube.com/watch?v=aHzw_8wWl48&t=17s'
        },
        {
            'title': 'كورس تعلم HTML من قناة الزيرو',
            'description': 'كورس لتعلم لغة HTML من قناة الزيرو على اليوتيوب مع عمل ملخص لبعض المعلومات وايضا حليت جميع التكاليف.',
            'image': '/static/images/html_elzero.png',
            'url': 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji'
        },
        {
            'title': 'كورس بايثون من قناة الزيرو',
            'description': 'كورس لتعلم لغة البايثون من قناة الزيرو مع عمل ملخص وايضا حليت جميع التكاليف.',
            'image': '/static/images/python_logo.png',
            'url': 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs'
        },
        {
            'title': ' SQL Tutorial',
            'description': 'ذاكرت SQL Tutorial من موقع w3schools.com',
            'image': '/static/images/sql_tutorial.png',
            'url': 'https://www.w3schools.com/sql/'
        },
        {
            'title': 'كورس اساسيات الشبكات من قناة IT Dose',
            'description': ' اكملت مذاكرة كورس اساسيات الشبكات من قناة IT Dose (عماد نشات) على اليوتيوب مع عمل ملخص تفصيلي لمعظم المعلومات اللي فيه.',
            'image': '/static/images/network_course_logo.png',
            'url': 'https://www.youtube.com/playlist?list=PL8s4OGp0649_e_Wbz5MlBgW5rBW-9hD0c'
        },
    ]
    
    # Social links
    social_links = [
        {'icon': 'github', 'href': '#', 'label': 'جيت هب'},
        {'icon': 'linkedin', 'href': '#', 'label': 'لينكد إن'},
        {'icon': 'twitter', 'href': '#', 'label': 'تويتر'},
        {'icon': 'mail', 'href': '#', 'label': 'البريد الإلكتروني'}
    ]
    
    return render_template('index.html',
        profile=profile_data,
        nav_items=nav_items,
        about_paragraphs=about_paragraphs,
        projects=projects,
        social_links=social_links
    )

if __name__ == '__main__':
    app.run(debug=True)
