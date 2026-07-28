/**
 * Language toggle widget - no style injection.
 * Mounts controls, translates page content, observes dynamic content and persists the preference.
 */
(function () {
    'use strict';

    var STORAGE_KEY = 'negiao-lang';
    var LEGACY_STORAGE_KEY = 'negiao.preferred-lang';
    var SUPPORTED_LANGS = ['zh', 'en'];
    var DEFAULT_LANG = 'zh';
    var COMMON_TEXT_PAIRS = [
        // —— 导航与通用操作 ——
        ['返回首页', 'Back Home'],
        ['返回索引', 'Back to Index'],
        ['打开菜单', 'Open Menu'],
        ['关闭菜单', 'Close Menu'],
        ['项目展示', 'Featured Projects'],
        ['项目', 'Projects'],
        ['笔记', 'Notes'],
        ['技术笔记', 'Technical Notes'],
        ['课程表', 'Schedule'],
        ['联系我', 'Contact'],
        ['探索项目', 'Explore Projects'],
        ['查看演示', 'View Demo'],
        ['查看词云', 'View Word Cloud'],
        ['查看笔记', 'View Note'],
        ['发送邮件', 'Send Email'],
        ['访问 GitHub', 'Visit GitHub'],
        ['QQ 联系', 'QQ Chat'],
        ['快速导航', 'Quick Links'],
        ['联系方式', 'Contact Info'],
        ['研究专题', 'Research Topics'],
        ['比赛项目', 'Competition Project'],
        ['学习笔记', 'Study Notes'],
        ['数据可视化', 'Data Visualization'],
        ['时空分析', 'Spatiotemporal Analysis'],
        ['地理数据', 'Geospatial Data'],
        ['全栈开发', 'Full-Stack Development'],
        ['技术笔记分享', 'Technical Notes Sharing'],
        ['专注于 WebGIS 开发、数据可视化与GIS', 'Focused on WebGIS development, data visualization, and GIS'],
        ['致力于GIS应用、开发领域的学习。', 'Dedicated to learning GIS applications and development.'],
        ['用 ❤️ 和现代技术构建', 'Built with ❤️ and modern technologies'],
        ['笔记索引', 'Notes Index'],
        ['技术学习心得与实践总结', 'Technical learning notes and practical takeaways'],
        ['每日记录', 'Daily Records'],
        ['项目与工具', 'Projects & Tools'],
        ['阅读笔记', 'Read Note'],
        ['开始测试', 'Start Quiz'],
        ['打开编辑器', 'Open Editor'],
        ['打开工具', 'Open Tool'],
        ['查看详情', 'View Details'],
        ['查看项目', 'View Project'],
        ['查看模板', 'View Template'],
        ['加载失败', 'Load failed'],
        ['正在加载笔记内容...', 'Loading note content...'],
        ['切换目录显示', 'Toggle table of contents'],
        ['Toggle Table of Contents', '切换目录显示'],
        ['单词测试', 'Word Quiz'],
        ['单词学习记录', 'Vocabulary Learning Log'],
        ['周迪的学习记录', "Zhou Di's Learning Log"],
        ['二维码解码', 'QR Decoder'],
        ['二维码生成器', 'QR Code Generator'],
        ['Markdown 编辑器', 'Markdown Editor'],
        ['笔记模板', 'Note Template'],
        ['每日课程', 'Daily Schedule'],
        ['实时显示当前课程和下节课安排', 'Shows current and next class in real time'],
        ['请选择正确的中文含义 (答对自动跳转)', 'Choose the correct Chinese meaning (auto-advance on correct answer)'],
        ['请选择正确的中文含义', 'Choose the correct Chinese meaning'],
        ['重新开始', 'Restart'],
        ['下一题', 'Next Question'],
        ['正确', 'Correct'],
        ['错误', 'Incorrect'],
        ['请先选择一个选项', 'Please choose an option first'],
        ['当前得分', 'Score'],
        ['加载中', 'Loading'],
        ['更新中', 'Updating'],
        ['返回首页 ←', '← Back Home'],
        ['← 返回首页', '← Back Home'],
        ['返回', 'Back'],
        ['快速通道', 'Quick Access'],
        ['笔记画廊', 'Note Gallery'],
        ['MD 编辑器', 'MD Editor'],
        ['WebGIS 演示', 'WebGIS Demo'],
        ['Vue 架构', 'Vue Stack'],
        ['精选作品与比赛项目', 'Selected works & competition projects'],
        ['六城季节变化数据可视化', 'Seasonal-change visualization of six cities'],
        ['欢迎交流与合作', 'Open to exchange and collaboration'],
        ['成果展示', 'Gallery'],
        ['个人介绍', 'About Me'],
        ['使用说明', 'How to Use'],
        ['全部笔记', 'All Notes'],
        ['搜索笔记...', 'Search notes...'],
        ['未找到匹配的笔记', 'No matching notes'],
        ['尝试更换关键词或切换分类', 'Try different keywords or another category'],
        ['持续学习，记录成长。', 'Keep learning, keep growing.'],
        ['浏览作品', 'Browse Works'],
        ['打开演练', 'Start Rehearsal'],
        ['夏令营答辩演练', 'Summer Camp Defense Rehearsal'],
        ['笔记文件', 'Note Files'],
        ['学习机会', 'Opportunities'],
        ['知识积累', 'Insights'],
        ['你好，我是', 'Hi, I am'],
        // —— 通用 UI 反馈 ——
        ['成功', 'Success'],
        ['失败', 'Failed'],
        ['警告', 'Warning'],
        ['提示', 'Notice'],
        ['确认', 'Confirm'],
        ['取消', 'Cancel'],
        ['关闭', 'Close'],
        ['保存', 'Save'],
        ['编辑', 'Edit'],
        ['删除', 'Delete'],
        ['复制', 'Copy'],
        ['粘贴', 'Paste'],
        ['提交', 'Submit'],
        ['重置', 'Reset'],
        ['搜索', 'Search'],
        ['筛选', 'Filter'],
        ['排序', 'Sort'],
        ['刷新', 'Refresh'],
        ['重试', 'Retry'],
        ['更多', 'More'],
        ['展开', 'Expand'],
        ['收起', 'Collapse'],
        ['上一页', 'Previous'],
        ['下一页', 'Next'],
        ['首页', 'Home'],
        ['末页', 'Last'],
        ['跳转', 'Go'],
        ['全部', 'All'],
        ['无', 'None'],
        ['是', 'Yes'],
        ['否', 'No'],
        ['确定', 'OK'],
        ['清空', 'Clear'],
        ['下载', 'Download'],
        ['上传', 'Upload'],
        ['分享', 'Share'],
        ['加载中...', 'Loading...'],
        ['处理中...', 'Processing...'],
        ['暂无数据', 'No data'],
        ['没有更多了', 'No more content'],
        ['操作成功', 'Operation successful'],
        ['操作失败', 'Operation failed'],
        ['网络错误', 'Network error'],
        ['请求超时', 'Request timed out'],
        ['未知错误', 'Unknown error'],
        ['请稍后重试', 'Please try again later'],
        // —— 时间相关 ——
        ['年', 'Year'],
        ['月', 'Month'],
        ['日', 'Day'],
        ['时', 'Hour'],
        ['分', 'Minute'],
        ['秒', 'Second'],
        ['今天', 'Today'],
        ['昨天', 'Yesterday'],
        ['明天', 'Tomorrow'],
        ['本周', 'This Week'],
        ['上周', 'Last Week'],
        ['下周', 'Next Week'],
        ['本月', 'This Month'],
        ['上月', 'Last Month'],
        ['下月', 'Next Month'],
        ['周一', 'Monday'],
        ['周二', 'Tuesday'],
        ['周三', 'Wednesday'],
        ['周四', 'Thursday'],
        ['周五', 'Friday'],
        ['周六', 'Saturday'],
        ['周日', 'Sunday'],
        ['一月', 'January'],
        ['二月', 'February'],
        ['三月', 'March'],
        ['四月', 'April'],
        ['五月', 'May'],
        ['六月', 'June'],
        ['七月', 'July'],
        ['八月', 'August'],
        ['九月', 'September'],
        ['十月', 'October'],
        ['十一月', 'November'],
        ['十二月', 'December'],
        ['上午', 'AM'],
        ['下午', 'PM'],
        ['刚刚', 'Just now'],
        ['分钟前', 'minutes ago'],
        ['小时前', 'hours ago'],
        ['天前', 'days ago'],
        // —— 学术与学习 ——
        ['论文', 'Paper'],
        ['答辩', 'Defense'],
        ['毕业', 'Graduation'],
        ['开题', 'Proposal'],
        ['中期', 'Mid-term'],
        ['初审', 'Initial Review'],
        ['复审', 'Re-review'],
        ['终审', 'Final Review'],
        ['通过', 'Passed'],
        ['未通过', 'Failed'],
        ['优秀', 'Excellent'],
        ['良好', 'Good'],
        ['中等', 'Average'],
        ['及格', 'Pass'],
        ['不及格', 'Fail'],
        ['成绩', 'Grade'],
        ['学分', 'Credits'],
        ['绩点', 'GPA'],
        ['课程', 'Course'],
        ['选修', 'Elective'],
        ['必修', 'Required'],
        ['课时', 'Class Hours'],
        ['教室', 'Classroom'],
        ['教师', 'Instructor'],
        ['班级', 'Class'],
        ['专业', 'Major'],
        ['学院', 'College'],
        ['大学', 'University'],
        ['研究', 'Research'],
        ['实验', 'Experiment'],
        ['数据', 'Data'],
        ['分析', 'Analysis'],
        ['方法', 'Method'],
        ['结果', 'Result'],
        ['结论', 'Conclusion'],
        ['讨论', 'Discussion'],
        ['摘要', 'Abstract'],
        ['关键词', 'Keywords'],
        ['引用', 'Citation'],
        ['参考文献', 'References'],
        ['图表', 'Figure'],
        ['表格', 'Table'],
        ['公式', 'Formula'],
        ['算法', 'Algorithm'],
        ['模型', 'Model'],
        ['系统', 'System'],
        ['平台', 'Platform'],
        ['工具', 'Tool'],
        ['项目', 'Project'],
        ['案例', 'Case Study'],
        ['应用', 'Application'],
        ['开发', 'Development'],
        ['设计', 'Design'],
        ['实现', 'Implementation'],
        ['测试', 'Test'],
        ['部署', 'Deployment'],
        ['维护', 'Maintenance'],
        // —— GIS / 地名补充 ——
        ['地图', 'Map'],
        ['图层', 'Layer'],
        ['坐标', 'Coordinate'],
        ['投影', 'Projection'],
        ['比例尺', 'Scale'],
        ['图例', 'Legend'],
        ['经度', 'Longitude'],
        ['纬度', 'Latitude'],
        ['海拔', 'Elevation'],
        ['高程', 'Altitude'],
        ['地形', 'Terrain'],
        ['地貌', 'Landform'],
        ['水系', 'Water System'],
        ['道路', 'Road'],
        ['建筑', 'Building'],
        ['边界', 'Boundary'],
        ['区域', 'Region'],
        ['城市', 'City'],
        ['乡村', 'Rural'],
        ['人口', 'Population'],
        ['经济', 'Economy'],
        ['气候', 'Climate'],
        ['温度', 'Temperature'],
        ['降水', 'Precipitation'],
        ['湿度', 'Humidity'],
        ['风速', 'Wind Speed'],
        ['气压', 'Pressure'],
        ['遥感', 'Remote Sensing'],
        ['卫星', 'Satellite'],
        ['影像', 'Imagery'],
        ['栅格', 'Raster'],
        ['矢量', 'Vector'],
        ['属性', 'Attribute'],
        ['空间', 'Spatial'],
        ['时间', 'Temporal'],
        ['时序', 'Time Series'],
        ['变化', 'Change'],
        ['趋势', 'Trend'],
        ['分布', 'Distribution'],
        ['密度', 'Density'],
        ['热点', 'Hotspot'],
        ['聚类', 'Clustering'],
        ['插值', 'Interpolation'],
        ['缓冲区', 'Buffer'],
        ['叠加', 'Overlay'],
        ['裁剪', 'Clip'],
        ['融合', 'Dissolve'],
        ['数字化', 'Digitization'],
        ['可视化', 'Visualization'],
        ['三维', '3D'],
        ['二维', '2D'],
        ['全景', 'Panorama'],
        ['漫游', 'Roaming'],
        ['导航', 'Navigation'],
        ['定位', 'Positioning'],
        ['测量', 'Measurement'],
        ['面积', 'Area'],
        ['长度', 'Length'],
        ['距离', 'Distance'],
        ['方位', 'Azimuth'],
        // —— Web / 前端术语 ——
        ['前端', 'Frontend'],
        ['后端', 'Backend'],
        ['接口', 'API'],
        ['组件', 'Component'],
        ['页面', 'Page'],
        ['路由', 'Route'],
        ['状态', 'State'],
        ['事件', 'Event'],
        ['监听', 'Listen'],
        ['绑定', 'Bind'],
        ['渲染', 'Render'],
        ['更新', 'Update'],
        ['销毁', 'Destroy'],
        ['生命周期', 'Lifecycle'],
        ['钩子', 'Hook'],
        ['插件', 'Plugin'],
        ['依赖', 'Dependency'],
        ['打包', 'Bundle'],
        ['构建', 'Build'],
        ['发布', 'Release'],
        ['版本', 'Version'],
        ['分支', 'Branch'],
        ['合并', 'Merge'],
        ['提交', 'Commit'],
        ['推送', 'Push'],
        ['拉取', 'Pull'],
        ['克隆', 'Clone'],
        ['仓库', 'Repository'],
        ['开源', 'Open Source'],
        ['协议', 'License'],
        // —— 省名补充 ——
        ['湖北', 'Hubei'],
        ['江苏', 'Jiangsu'],
        ['山东', 'Shandong'],
        ['浙江', 'Zhejiang'],
        ['贵州', 'Guizhou'],
        ['山西', 'Shanxi'],
        ['北京', 'Beijing'],
        ['上海', 'Shanghai'],
        ['天津', 'Tianjin'],
        ['重庆', 'Chongqing'],
        ['广东', 'Guangdong'],
        ['广西', 'Guangxi'],
        ['福建', 'Fujian'],
        ['湖南', 'Hunan'],
        ['河南', 'Henan'],
        ['河北', 'Hebei'],
        ['辽宁', 'Liaoning'],
        ['吉林', 'Jilin'],
        ['黑龙江', 'Heilongjiang'],
        ['安徽', 'Anhui'],
        ['江西', 'Jiangxi'],
        ['四川', 'Sichuan'],
        ['云南', 'Yunnan'],
        ['贵州', 'Guizhou'],
        ['海南', 'Hainan'],
        ['陕西', 'Shaanxi'],
        ['甘肃', 'Gansu'],
        ['青海', 'Qinghai'],
        ['内蒙古', 'Inner Mongolia'],
        ['新疆', 'Xinjiang'],
        ['宁夏', 'Ningxia'],
        ['西藏', 'Tibet'],
        ['台湾', 'Taiwan'],
        ['香港', 'Hong Kong'],
        ['澳门', 'Macau'],
        // —— 社交与联系 ——
        ['微信', 'WeChat'],
        ['邮箱', 'Email'],
        ['电话', 'Phone'],
        ['地址', 'Address'],
        ['关注', 'Follow'],
        ['点赞', 'Like'],
        ['收藏', 'Favorite'],
        ['评论', 'Comment'],
        ['留言', 'Message'],
        ['私信', 'Direct Message'],
        ['关注者', 'Followers'],
        ['正在关注', 'Following'],
        ['动态', 'Feed'],
        ['通知', 'Notification'],
        ['设置', 'Settings'],
        ['个人资料', 'Profile'],
        ['账号', 'Account'],
        ['密码', 'Password'],
        ['登录', 'Log In'],
        ['退出', 'Log Out'],
        ['注册', 'Sign Up'],
        // —— 其他常见内容 ——
        ['关于', 'About'],
        ['归档', 'Archive'],
        ['分类', 'Category'],
        ['标签', 'Tag'],
        ['阅读', 'Read'],
        ['浏览', 'View'],
        ['播放', 'Play'],
        ['暂停', 'Pause'],
        ['停止', 'Stop'],
        ['音量', 'Volume'],
        ['全屏', 'Fullscreen'],
        ['静音', 'Mute'],
        ['上一页', 'Prev'],
        ['下一页', 'Next'],
        ['热门', 'Popular'],
        ['最新', 'Latest'],
        ['推荐', 'Recommended'],
        ['精选', 'Featured'],
        ['排行', 'Ranking'],
        ['评论', 'Comments'],
        ['点赞', 'Likes'],
        ['分享', 'Shares'],
        ['浏览', 'Views'],
        ['字数', 'Words'],
        ['阅读时长', 'Reading Time'],
        ['难度', 'Difficulty'],
        ['进度', 'Progress'],
        ['完成', 'Complete'],
        ['未完成', 'Incomplete'],
        ['已读', 'Read'],
        ['未读', 'Unread'],
        ['草稿', 'Draft'],
        ['发布', 'Publish'],
        ['私密', 'Private'],
        ['公开', 'Public'],
        ['加密', 'Encrypted'],
        ['热门标签', 'Hot Tags'],
        ['随机文章', 'Random Post'],
        ['相关推荐', 'Related'],
        ['猜你喜欢', 'You May Like'],
        ['阅读全文', 'Read More'],
        ['继续阅读', 'Continue Reading'],
        ['跳转链接', 'Jump Link'],
        ['外部链接', 'External Link'],
        ['内部链接', 'Internal Link'],
        ['锚点', 'Anchor'],
        ['置顶', 'Pinned'],
        ['精华', 'Essence'],
        ['已解决', 'Solved'],
        ['未解决', 'Unsolved'],
        ['精华帖', 'Featured Thread'],
        ['新手入门', 'Getting Started'],
        ['进阶', 'Advanced'],
        ['实战', 'Practical'],
        ['教程', 'Tutorial'],
        ['指南', 'Guide'],
        ['文档', 'Documentation'],
        ['常见问题', 'FAQ'],
        ['问题反馈', 'Feedback'],
        ['建议', 'Suggestion'],
        ['感谢', 'Thanks'],
        ['欢迎', 'Welcome'],
        ['再见', 'Goodbye'],
        ['晚安', 'Good Night'],
        ['早安', 'Good Morning'],
        ['午安', 'Good Afternoon'],

        // —— index.html 首页项目展示 ——
        ['Geoscene - 宝藏小城', 'Geoscene - Treasure City'],
        ['多地区地理空间数据可视化项目，通过交互式图表展示中国六个城市的时空变化规律。', 'Multi-regional geospatial data visualization project showing spatiotemporal variation patterns of six Chinese cities through interactive charts.'],
        ['基于 OpenLayers 构建的交互式地图应用，提供丰富的地理信息浏览与空间分析功能。', 'Interactive map application built on OpenLayers, providing rich geographic information browsing and spatial analysis functions.'],
        ['通过文本挖掘技术生成的地区特色词云图，直观展示不同地区的关键词特征和文化元素。', 'Regional feature word cloud maps generated through text mining, visually displaying keyword characteristics and cultural elements of different regions.'],
        ['个人学习笔记与经验分享，包括WebGIS、数据可视化等领域的技术积累和实践总结。', 'Personal learning notes and experience sharing, including technical accumulation and practical summary in WebGIS, data visualization and other fields.'],
        ['OpenLayers', 'OpenLayers'],
        ['JavaScript', 'JavaScript'],
        ['词云生成', 'Word Cloud Generation'],
        ['文本分析', 'Text Analysis'],
        ['UI优化', 'UI Optimization'],
        ['经验分享', 'Experience Sharing'],
        ['查看演示', 'View Demo'],
        ['查看词云', 'View Word Cloud'],
        ['查看笔记', 'View Notes'],
        ['GitHub 仓库', 'GitHub Repository'],
        ['合作与技术交流', 'Cooperation and technical exchange'],
        ['开源项目与代码', 'Open source projects and code'],
        ['在线交流沟通', 'Online communication'],
        ['&copy; <span id="current-year">2026</span> NEGIAO. All rights reserved.', '&copy; <span id="current-year">2026</span> NEGIAO. All rights reserved.'],

        // —— 404 页面 ——
        ['页面未找到', 'Page Not Found'],
        ['404 - 页面未找到 | NEGIAO', '404 - Page Not Found | NEGIAO'],
        ['迷路了？', 'Lost?'],
        ['你访问的页面似乎不存在，可能已被移动或删除。', 'The page you visited does not seem to exist, it may have been moved or deleted.'],
        ['你是否在找：', 'Were you looking for:'],
        ['返回上一页', 'Go Back'],
        ['秒后自动返回首页', 'seconds to auto-return to home'],
        ['WebGIS 地图应用', 'WebGIS Map Application'],
        ['成就画廊', 'Achievement Gallery'],
        ['解码工具', 'Decoding Tool'],
        ['物理页面', 'Physics Page'],

        // —— Pages/notes.html 笔记索引 ——
        ['Notes', 'Notes'],
        ['首页', 'Home'],
        ['清空搜索', 'Clear Search'],
        ['成果展示', 'Gallery'],
        ['个人介绍', 'About Me'],
        ['记录学习过的单词，方便复习和巩固记忆', 'Record learned words for easy review and memory consolidation'],
        ['周迪的英语单词学习记录，每日更新，包含释义与用法', "Zhou Di's English vocabulary learning record, updated daily with meanings and usage"],
        ['updating', 'updating'],

        // —— Pages/schedule.html 课程表 ——
        ['学习日程', 'Study Schedule'],
        ['本周课程表', 'Weekly Schedule'],
        ['集中查看课程时间、上课地点与当日进度，当前课程和下一节安排会自动更新。', 'Centrally view class times, locations and daily progress. Current and next class are automatically updated.'],
        ['当前时间', 'Current Time'],
        ['正在获取当前时间...', 'Getting current time...'],
        ['当前状态', 'Current Status'],
        ['实时', 'Live'],
        ['正在判断课程状态...', 'Determining class status...'],
        ['请稍候', 'Please wait'],
        ['下一节课', 'Next Class'],
        ['自动更新', 'Auto Update'],
        ['正在读取课程安排...', 'Reading class schedule...'],
        ['本周概览', 'Weekly Overview'],
        ['周一至周五', 'Mon–Fri'],
        ['9 门课程', '9 Classes'],
        ['覆盖 13 个上课时段，地点与连续课时均已标注', 'Covering 13 time slots, locations and continuous hours are marked'],
        ['每周安排', 'Weekly Arrangement'],
        ['时间按每日教学节次排列，连续课程会自动合并显示。', 'Time is arranged by daily teaching periods, continuous classes are automatically merged.'],
        ['当前课程', 'Current Class'],
        ['40 分钟内需出发', 'Need to depart within 40 min'],
        ['左右滑动查看完整课程表', 'Swipe left/right to view full schedule'],
        ['地点信息以课程安排中的教室为准', 'Location information is subject to the classroom in the schedule'],
        ['课程状态每分钟自动刷新', 'Class status refreshes every minute'],
        ['空间数据库', 'Spatial Database'],
        ['空间分析', 'Spatial Analysis'],
        ['GIS二次开发', 'GIS Secondary Development'],
        ['卫星导航原理', 'Satellite Navigation Principles'],
        ['激光雷达遥感', 'LiDAR Remote Sensing'],
        ['机器学习导论', 'Introduction to Machine Learning'],
        ['无人机遥感', 'UAV Remote Sensing'],
        ['摄影测量学', 'Photogrammetry'],
        ['今天没有课程', 'No classes today'],
        ['周末可以整理学习计划或适当休息', 'Weekend: organize study plans or rest appropriately'],
        ['休息日', 'Day Off'],
        ['当前没有课程', 'No class currently'],
        ['课间', 'Break'],
        ['距离下一节课还有', 'Next class in'],
        ['分钟', 'minutes'],
        ['今日课程状态正在更新', 'Today\'s class status is updating'],
        ['今天的课程已经结束', 'Today\'s classes have ended'],
        ['已结束', 'Finished'],
        ['下周一：空间数据库', 'Next Monday: Spatial Database'],
        ['今天暂无后续课程', 'No more classes today'],
        ['可以安排复习或自由时间', 'Can arrange review or free time'],
        ['第', 'Period'],
        ['节', ''],
        ['节课', 'classes'],
        ['进行中', 'In Progress'],
        ['113机房', 'Room 113'],
        ['114机房', 'Room 114'],
        ['曾宪梓楼606', 'Zeng Xianzi Building 606'],

        // —— Pages/Note/word-quiz.html 单词测试 ——
        ['单词测试 - NEGIAO', 'Word Quiz - NEGIAO'],
        ['NEGIAO英语单词测试系统 - 随机测验，巩固记忆', 'NEGIAO English Word Quiz System - Random quiz, consolidate memory'],
        ['选择正确的中文含义，答对自动跳转', 'Choose the correct Chinese meaning, auto-advance on correct answer'],
        ['进度', 'Progress'],
        ['正确', 'Correct'],
        ['错误', 'Incorrect'],
        ['准确率', 'Accuracy'],
        ['题目', 'Question'],
        ['下一题', 'Next Question'],
        ['重新开始', 'Restart'],
        ['请先选择一个选项', 'Please choose an option first'],
        ['你的选择', 'Your Choice'],
        ['正确答案', 'Correct Answer'],
        ['回答正确！', 'Correct!'],
        ['回答错误', 'Incorrect'],
        ['已完成所有题目', 'All questions completed'],
        ['最终得分', 'Final Score'],
        ['正确率', 'Accuracy Rate'],
        ['再试一次', 'Try Again'],
        ['返回笔记', 'Back to Notes'],
        ['学习更多', 'Learn More'],

        // —— Pages/Note/gallery.html 画廊 ——
        ['成果展示 - NEGIAO', 'Gallery - NEGIAO'],
        ['NEGIAO的成果展示画廊 - 往期作品与可视化成果', "NEGIAO's achievement gallery - past works and visualization results"],
        ['查看详情', 'View Details'],
        ['上一张', 'Previous'],
        ['下一张', 'Next'],
        ['关闭', 'Close'],
        ['返回', 'Back'],
        ['图片', 'Image'],
        ['加载失败', 'Load Failed'],
        ['点击图片查看大图', 'Click image to view full size'],

        // —— Pages/Note/note-viewer 笔记查看器 ——
        ['笔记 - NEGIAO', 'Note - NEGIAO'],
        ['返回笔记索引', 'Back to Notes Index'],
        ['加载失败', 'Load Failed'],
        ['找不到笔记', 'Note Not Found'],
        ['该笔记文件不存在或已被删除。', 'The note file does not exist or has been deleted.'],
        ['网络连接失败', 'Network Connection Failed'],
        ['请检查网络连接，然后点击下方按钮重试。', 'Please check your network connection, then click the button below to retry.'],
        ['核心组件加载失败', 'Core Component Load Failed'],
        ['某些第三方组件加载出错，已启用降级方案。', 'Some third-party components failed to load, fallback mode enabled.'],
        ['参数无效', 'Invalid Parameter'],
        ['请检查 URL 参数是否正确。', 'Please check if the URL parameters are correct.'],
        ['返回笔记列表', 'Back to Notes List'],
        ['刷新重试', 'Refresh & Retry'],
        ['文章章节目录', 'Article Table of Contents'],
        ['切换目录显示', 'Toggle Table of Contents'],
        ['正在加载笔记内容...', 'Loading note content...'],
        ['未指定笔记名称。请使用 ?note=笔记名 参数访问。', 'No note name specified. Please use ?note=note_name parameter.'],
        ['笔记名称包含非法字符。', 'Note name contains invalid characters.'],

        // —— Pages/Note/markdown_editor.html Markdown 编辑器 ——
        ['实时Markdown编辑器 - 支持实时预览的在线Markdown写作工具', 'Real-time Markdown editor - online Markdown writing tool with live preview'],
        ['切换语言', 'Switch Language'],
        ['切换主题', 'Switch Theme'],
        ['复制链接', 'Copy Link'],
        ['清空内容 (Ctrl+K)', 'Clear Content (Ctrl+K)'],
        ['复制全部内容', 'Copy All Content'],
        ['从剪贴板粘贴', 'Paste from Clipboard'],
        ['标题 1', 'Heading 1'],
        ['标题 2', 'Heading 2'],
        ['标题 3', 'Heading 3'],
        ['粗体', 'Bold'],
        ['斜体', 'Italic'],
        ['删除线', 'Strikethrough'],
        ['行内代码', 'Inline Code'],
        ['引用', 'Quote'],
        ['链接', 'Link'],
        ['图片', 'Image'],
        ['无序列表', 'Unordered List'],
        ['有序列表', 'Ordered List'],
        ['表格', 'Table'],
        ['分割线', 'Horizontal Rule'],
        ['编辑', 'Edit'],
        ['预览', 'Preview'],
        ['实时同步', 'Real-time Sync'],
        ['行', 'Lines'],
        ['字符', 'Chars'],
        ['字', 'Words'],
        ['在此输入 Markdown 文本，右侧实时预览...', 'Enter Markdown text here, live preview on the right...'],
        ['Markdown 语法指南', 'Markdown Syntax Guide'],
        ['清空内容', 'Clear Content'],
        ['复制成功', 'Copied Successfully'],
        ['复制失败', 'Copy Failed'],
        ['已复制到剪贴板', 'Copied to clipboard'],
        ['访问量', 'Visits'],

        // —— Others/decoder.html 二维码解码 ——
        ['NEGIAO工具 - 二维码解码', 'NEGIAO Tools - QR Decoder'],
        ['二维码解码器', 'QR Code Decoder'],
        ['上传图片', 'Upload Image'],
        ['拖放图片到此处', 'Drop image here'],
        ['或点击选择文件', 'Or click to select file'],
        ['支持 PNG、JPG、WEBP 格式', 'Supports PNG, JPG, WEBP formats'],
        ['解码结果', 'Decoding Result'],
        ['未检测到二维码', 'No QR code detected'],
        ['无法识别的二维码格式', 'Unrecognized QR code format'],
        ['复制成功', 'Copied Successfully'],
        ['已复制到剪贴板', 'Copied to clipboard'],
        ['复制失败，请手动选择文本复制', 'Copy failed, please manually select and copy text'],
        ['清空', 'Clear'],
        ['暂无内容', 'No Content'],
        ['扫描二维码', 'Scan QR Code'],
        ['识别结果', 'Recognition Result'],
        ['内容', 'Content'],
        ['类型', 'Type'],
        ['网址', 'URL'],
        ['文本', 'Text'],
        ['电话号码', 'Phone Number'],
        ['电子邮件', 'Email'],
        ['微信', 'WeChat'],
        ['WiFi', 'WiFi'],
        ['地理位置', 'Location'],
        ['日历事件', 'Calendar Event'],
        ['联系人', 'Contact'],
        ['未知类型', 'Unknown Type'],

        // —— Pages/Self_Intro.html 夏令营答辩演练 ——
        ['中科院地理所夏令营 · 答辩演练', 'CAS Geography Institute Summer Camp · Defense Rehearsal'],
        ['姚乃高（河南大学 · 地信）| 地图学与地理信息系统（GIS技术与应用）', 'Yao Naigao (Henan University · GIS) | Cartography and GIS (GIS Technology & Applications)'],
        ['开始', 'Start'],
        ['PPT 导航', 'PPT Navigation'],
        ['10 页', '10 Pages'],
        ['5分钟 完整版', '5min Full Version'],
        ['3分钟 精简版', '3min Condensed Version'],
        ['1分钟 极速版', '1min Express Version'],
        ['模拟提问库', 'Mock Q&A Bank'],
        ['叙事主线', 'Narrative Thread'],
        ['持续成长，厚植基础，在科研与工程实践中不断探索GIS技术的应用价值。', 'Continuous growth, solid foundation, constantly exploring the application value of GIS technology in research and engineering practice.'],
        ['版本', 'Version'],
        ['计时器', 'Timer'],
        ['答辩演练', 'Defense Rehearsal'],
        ['自我介绍', 'Self Introduction'],
        ['研究背景', 'Research Background'],
        ['研究内容', 'Research Content'],
        ['研究成果', 'Research Results'],
        ['未来计划', 'Future Plans'],
        ['总结', 'Summary'],
        ['谢谢', 'Thank You'],

        // —— Pages/WebGIS_task WebGIS 作业 ——
        ['WebGIS Workspace', 'WebGIS Workspace'],
        ['WebGIS 实验作业', 'WebGIS Experimental Tasks'],
        ['基于 OpenLayers 的 WebGIS 开发实践', 'WebGIS Development Practice Based on OpenLayers'],
        ['实验一：2D/3D 地图初始化', 'Task 1: 2D/3D Map Initialization'],
        ['实验二：门户页面开发', 'Task 2: Portal Page Development'],
        ['实验四：2D/3D 联动视图', 'Task 4: 2D/3D Linked Views'],
        ['实验五：鼠标联动', 'Task 5: Mouse Linkage'],
        ['实验六：驾驶模拟', 'Task 6: Driving Simulation'],
        ['查看代码', 'View Code'],
        ['在线预览', 'Online Preview'],
        ['返回作业索引', 'Back to Task Index'],
        ['2D 地图', '2D Map'],
        ['3D 地图', '3D Map'],
        ['2D 门户', '2D Portal'],
        ['3D 门户', '3D Portal'],
        ['联动视图', 'Linked Views'],
        ['鼠标联动', 'Mouse Linkage'],
        ['驾驶模拟', 'Driving Simulation'],
        ['返回索引', 'Back to Index'],

        // —— Pages/Self_Intro.html 更多 UI 文案 ——
        ['中科院地理所夏令营 · 答辩演练', 'CAS Geography Institute Summer Camp · Defense Rehearsal'],
        ['姚乃高（河南大学 · 地信）| 地图学与地理信息系统（GIS技术与应用）', 'Yao Naigao (Henan University · GIS) | Cartography & GIS (GIS Technology & Applications)'],
        ['开始', 'Start'],
        ['PPT 导航', 'PPT Navigation'],
        ['10 页', '10 Pages'],
        ['叙事主线', 'Narrative Thread'],
        ['持续成长，厚植基础，在科研与工程实践中不断探索GIS技术的应用价值。', 'Continuous growth, solid foundation, constantly exploring the application value of GIS technology in research and engineering practice.'],
        ['版本', 'Version'],
        ['5分钟 完整版', '5min Full Version'],
        ['3分钟 精简版', '3min Abridged Version'],
        ['1分钟 极速版', '1min Express Version'],
        ['模拟提问库', 'Mock Q&A Bank'],
        ['一句话中心句 · 背诵重点', 'One-Sentence Core · Memorization Focus'],
        ['叙事逻辑', 'Narrative Logic'],
        ['PPT对应要点', 'PPT Key Points'],
        ['语速', 'Speed'],
        ['时间', 'Time'],
        ['气场', 'Tone'],
        ['逐字稿', 'Script'],
        ['台风指令', 'Stage Direction'],
        ['上一页', 'Previous'],
        ['下一页', 'Next'],
        ['导师高频提问库', 'Mentor High-Frequency Q&A Bank'],
        ['全栈工程的科研价值', 'Research Value of Full-Stack Engineering'],
        ['你用 Docker 和 Hugging Face 做的全栈部署，对科研有什么价值？', 'What is the research value of your full-stack deployment using Docker and Hugging Face?'],
        ['黑碳研究与GIS的联系', 'Connection Between Black Carbon Research and GIS'],
        ['虎丘岗黑碳研究是纯物理实验，跟GIS技术与应用有什么关系？', 'Hutigang black carbon research is a pure physics experiment, what does it have to do with GIS technology and applications?'],
        ['熵权法模型的人口反比因子', 'Population Inverse Factor in Entropy Weight Model'],
        ['为什么在宝藏小城的熵权法模型里引入人口反比因子？', 'Why introduce the population inverse factor in the entropy weight model for Treasure Cities?'],
        ['遇到不会的算法，真诚表达「下去立刻补齐」，保持谦逊。', 'When encountering unfamiliar algorithms, sincerely express "I will learn it immediately" and stay humble.'],
        ['开场定调', 'Opening'],
        ['我是谁，我为什么站在这里', 'Who I Am, Why I Stand Here'],
        ['基础扎实，持续成长', 'Solid Foundation, Continuous Growth'],
        ['一个持续成长的GIS学生', 'A Continuously Growing GIS Student'],
        ['三核心能力，扎实专业基础', 'Three Core Competencies, Solid Professional Foundation'],
        ['扎实的专业基础，是科研与工程实践的重要支撑', 'A solid professional foundation is an important support for research and engineering practice'],
        ['以竞赛为起点，探索GIS应用', 'Starting from Competitions, Exploring GIS Applications'],
        ['以科研竞赛为起点，尝试利用GIS解决真实问题', 'Starting from research competitions, attempting to use GIS to solve real problems'],
        ['完整GIS流程：从数据到可视化', 'Complete GIS Process: From Data to Visualization'],
        ['宝藏小城：系统完成从数据处理、模型分析到可视化展示的完整GIS流程', 'Treasure City: Systematically complete the full GIS process from data processing, model analysis to visualization'],
        ['理解GIS背后的科学问题', 'Understanding the Scientific Problems Behind GIS'],
        ['虎丘岗遗址：参与地学科研，理解GIS分析背后的科学问题', 'Hutigang Site: Participating in geoscience research, understanding the scientific problems behind GIS analysis'],
        ['在真实需求中理解GIS应用价值', 'Understanding GIS Application Value in Real Needs'],
        ['社会工程实践——从技能服务到真实需求反哺', 'Social Engineering Practice——From Skill Service to Real Need Feedback'],
        ['从GIS应用到工程化开发', 'From GIS Application to Engineering Development'],
        ['全栈工程项目——从GIS应用到工程化开发', 'Full-Stack Engineering Project——From GIS Application to Engineering Development'],
        ['目标明确，与GIS方向契合', 'Clear Goals, Aligned with GIS Direction'],
        ['未来规划：为什么选择地理所GIS方向', 'Future Plan: Why Choose GIS Direction at CAS'],
        ['心怀感恩，继续前行', 'Grateful, Moving Forward'],
        ['恳请各位老师批评指正', 'Kindly Request Your Valuable Feedback'],
        ['中速', 'Medium'],
        ['快速', 'Fast'],
        ['快速过渡', 'Quick Transition'],
        ['慢速，鞠躬', 'Slow, Bow'],
        ['谦逊自信', 'Humble Confidence'],
        ['真诚沉稳', 'Sincere and Steady'],
        ['大方得体', 'Graceful'],
        ['干练', 'Crisp'],
        ['谦逊有礼', 'Humble and Polite'],
        ['谦逊', 'Humble'],
        ['姚乃高 · GIS技术与应用', 'Yao Naigao · GIS Technology and Applications'],
        ['姚乃高，河南大学地理信息科学专业，心向往之，素履以往。', 'Yao Naigao, GIS major at Henan University, going forward with pure heart.'],
        ['专业排名从第39名攀升至第6名，两年省级大创。', 'Major ranking climbed from 39th to 6th, two years of provincial innovation projects.'],
        ['GIS、计算机、遥感三方面均衡发展，技术类课程均分95以上。', 'Balanced development in GIS, Computer Science and Remote Sensing, technical courses averaged 95+.'],
        ['以竞赛为起点，用GIS解决真实问题。', 'Starting from competitions, using GIS to solve real problems.'],
        ['关注反向旅游，挖掘宝藏小城，完成完整GIS流程。', 'Focus on reverse tourism, discover treasure cities, complete the full GIS process.'],
        ['参与地学科研，理解GIS分析背后的科学问题。', 'Participate in geoscience research, understand the scientific problems behind GIS analysis.'],
        ['从基础制图到企业GIS服务，理解GIS应用价值。', 'From basic mapping to enterprise GIS services, understanding GIS application value.'],
        ['从GIS应用到工程化开发，完成Docker部署与开源发布。', 'From GIS application to engineering development, complete Docker deployment and open source release.'],
        ['聚焦智能遥感与空间计算，深耕GIS技术与应用。', 'Focus on intelligent remote sensing and spatial computing, deepen GIS technology and applications.'],
        ['持续成长，厚植基础，探索GIS技术的应用价值。', 'Continuous growth, solid foundation, exploring the application value of GIS technology.'],

        // —— Pages/WebGIS_task/index.html 作业中转站 ——
        ['河南大学地理与工程学部 · ArcGIS SDK 实习四', 'Henan University Geography & Engineering Division · ArcGIS SDK Internship 4'],
        ['《WebGIS原理与应用·实习四》作品中转站', 'Works Hub for "WebGIS Principles & Applications · Internship 4"'],
        ['围绕 2D/3D 地图创建、在线 WebMap/WebScene 加载、调试与监控、Widget 集成、鼠标交互和车辆模拟等任务整理的成果展示页。', 'Results showcase organized around tasks including 2D/3D map creation, online WebMap/WebScene loading, debugging & monitoring, widget integration, mouse interaction and vehicle simulation.'],
        ['创建简单的 2D / 3D 地图', 'Create Simple 2D / 3D Maps'],
        ['加载 ESRI 影像底图并设置初始视角，完成 2D 地图与 3D 场景的基础创建，掌握 MapView、SceneView 及高程图层的接入方式。', 'Load ESRI imagery basemap and set initial view, complete basic creation of 2D maps and 3D scenes, master MapView, SceneView and elevation layer access.'],
        ['通过 Web 地图和 Web 场景加载图层', 'Load Layers via Web Maps and Web Scenes'],
        ['基于 ArcGIS Online 中配置好的 WebMap 与 WebScene 项目，通过 portal item id 加载在线资源并显示图层与场景内容。', 'Based on configured WebMap and WebScene projects in ArcGIS Online, load online resources via portal item id and display layer and scene content.'],
        ['调试 JavaScript 并监控 HTTP 通讯', 'Debug JavaScript and Monitor HTTP Communication'],
        ['通过 console.log 排查字符、语法与逻辑问题，并结合浏览器控制台检查前后端请求 URL，验证数据传输与请求格式是否正确。', 'Troubleshoot character, syntax and logic issues via console.log, and use browser console to check frontend/backend request URLs, verify data transmission and request format.'],
        ['在 2D 和 3D 视图中集成 Widget', 'Integrate Widgets in 2D and 3D Views'],
        ['在 2D/3D 视图中分别集成图例和图层列表组件，让地图与场景能够同步展示图层信息与可视化控制项。', 'Integrate legend and layer list components in 2D/3D views respectively, allowing maps and scenes to synchronously display layer information and visualization controls.'],
        ['处理鼠标事件和弹出窗口', 'Handle Mouse Events and Popups'],
        ['在 3D 视图中监听鼠标位置并构造 Google 街景链接，在 2D 视图中根据鼠标位置检测要素并弹出对应信息窗口。', 'Listen to mouse position in 3D view and construct Google Street View links, detect features based on mouse position in 2D view and popup corresponding info windows.'],
        ['利用图层、渲染器和符号模拟汽车行驶', 'Simulate Car Driving Using Layers, Renderers and Symbols'],
        ['通过替换 2D 与 3D 车辆符号样式，并结合轨迹路线、渲染器与相机跟随逻辑，实现汽车在地图中的动态行驶效果。', 'Replace 2D and 3D vehicle symbol styles, combine trajectory routes, renderers and camera follow logic to achieve dynamic car driving effects in maps.'],
        ['查看 2D 地图', 'View 2D Map'],
        ['查看 3D 场景', 'View 3D Scene'],
        ['查看 WebMap', 'View WebMap'],
        ['查看 WebScene', 'View WebScene'],
        ['进入图例模块', 'Enter Legend Module'],
        ['进入交互模块', 'Enter Interaction Module'],
        ['启动车辆模拟', 'Start Vehicle Simulation'],
        ['调试说明', 'Debugging Guide'],
        ['返回中转站', 'Back to Hub'],
        ['personal webGIS task 1.1 2d maps', 'personal webGIS task 1.1 2d maps'],
        ['Active', 'Active'],
        ['Dev Only', 'Dev Only'],
        ['Simulation', 'Simulation'],

        // —— Pages/Self_Intro.html 答辩演练 UI 文案 ——
        ['Section', 'Section'],
        ['一句话中心句 · 背诵重点', 'One-Sentence Core · Memorization Focus'],
        ['叙事逻辑', 'Narrative Logic'],
        ['PPT对应要点', 'PPT Key Points'],
        ['语速', 'Speed'],
        ['时间', 'Time'],
        ['气场', 'Tone'],
        ['逐字稿', 'Script'],
        ['台风指令', 'Stage Direction'],
        ['上一页', 'Previous'],
        ['下一页', 'Next'],
        ['导师高频提问库', 'Mentor High-Frequency Q&A Bank'],
        ['全栈工程的科研价值', 'Research Value of Full-Stack Engineering'],
        ['你用 Docker 和 Hugging Face 做的全栈部署，对科研有什么价值？', 'What is the research value of your full-stack deployment using Docker and Hugging Face?'],
        ['黑碳研究与GIS的联系', 'Connection Between Black Carbon Research and GIS'],
        ['虎丘岗黑碳研究是纯物理实验，跟GIS技术与应用有什么关系？', 'Hutigang black carbon research is a pure physics experiment, what does it have to do with GIS technology and applications?'],
        ['熵权法模型的人口反比因子', 'Population Inverse Factor in Entropy Weight Model'],
        ['为什么在宝藏小城的熵权法模型里引入人口反比因子？', 'Why introduce the population inverse factor in the entropy weight model for Treasure Cities?'],
        ['遇到不会的算法，真诚表达「下去立刻补齐」，保持谦逊。', 'When encountering unfamiliar algorithms, sincerely express "I will learn it immediately" and stay humble.'],
        ['开场定调', 'Opening'],
        ['我是谁，我为什么站在这里', 'Who I Am, Why I Stand Here'],
        ['基础扎实，持续成长', 'Solid Foundation, Continuous Growth'],
        ['一个持续成长的GIS学生', 'A Continuously Growing GIS Student'],
        ['三核心能力，扎实专业基础', 'Three Core Competencies, Solid Professional Foundation'],
        ['扎实的专业基础，是科研与工程实践的重要支撑', 'A solid professional foundation is an important support for research and engineering practice'],
        ['以竞赛为起点，探索GIS应用', 'Starting from Competitions, Exploring GIS Applications'],
        ['以科研竞赛为起点，尝试利用GIS解决真实问题', 'Starting from research competitions, attempting to use GIS to solve real problems'],
        ['完整GIS流程：从数据到可视化', 'Complete GIS Process: From Data to Visualization'],
        ['宝藏小城：系统完成从数据处理、模型分析到可视化展示的完整GIS流程', 'Treasure City: Systematically complete the full GIS process from data processing, model analysis to visualization'],
        ['理解GIS背后的科学问题', 'Understanding the Scientific Problems Behind GIS'],
        ['虎丘岗遗址：参与地学科研，理解GIS分析背后的科学问题', 'Hutigang Site: Participating in geoscience research, understanding the scientific problems behind GIS analysis'],
        ['在真实需求中理解GIS应用价值', 'Understanding GIS Application Value in Real Needs'],
        ['社会工程实践——从技能服务到真实需求反哺', 'Social Engineering Practice——From Skill Service to Real Need Feedback'],
        ['从GIS应用到工程化开发', 'From GIS Application to Engineering Development'],
        ['全栈工程项目——从GIS应用到工程化开发', 'Full-Stack Engineering Project——From GIS Application to Engineering Development'],
        ['目标明确，与GIS方向契合', 'Clear Goals, Aligned with GIS Direction'],
        ['未来规划：为什么选择地理所GIS方向', 'Future Plan: Why Choose GIS Direction at CAS'],
        ['心怀感恩，继续前行', 'Grateful, Moving Forward'],
        ['恳请各位老师批评指正', 'Kindly Request Your Valuable Feedback'],
        ['中速', 'Medium'],
        ['快速', 'Fast'],
        ['快速过渡', 'Quick Transition'],
        ['慢速，鞠躬', 'Slow, Bow'],
        ['谦逊自信', 'Humble Confidence'],
        ['真诚沉稳', 'Sincere and Steady'],
        ['大方得体', 'Graceful'],
        ['干练', 'Crisp'],
        ['谦逊有礼', 'Humble and Polite'],
        ['谦逊', 'Humble'],
        ['姚乃高 · GIS技术与应用', 'Yao Naigao · GIS Technology and Applications'],
        ['姚乃高，河南大学地理信息科学专业，心向往之，素履以往。', 'Yao Naigao, GIS major at Henan University, going forward with pure heart.'],
        ['专业排名从第39名攀升至第6名，两年省级大创。', 'Major ranking climbed from 39th to 6th, two years of provincial innovation projects.'],
        ['GIS、计算机、遥感三方面均衡发展，技术类课程均分95以上。', 'Balanced development in GIS, Computer Science and Remote Sensing, technical courses averaged 95+.'],
        ['以竞赛为起点，用GIS解决真实问题。', 'Starting from competitions, using GIS to solve real problems.'],
        ['关注反向旅游，挖掘宝藏小城，完成完整GIS流程。', 'Focus on reverse tourism, discover treasure cities, complete the full GIS process.'],
        ['参与地学科研，理解GIS分析背后的科学问题。', 'Participate in geoscience research, understand the scientific problems behind GIS analysis.'],
        ['从基础制图到企业GIS服务，理解GIS应用价值。', 'From basic mapping to enterprise GIS services, understanding GIS application value.'],
        ['从GIS应用到工程化开发，完成Docker部署与开源发布。', 'From GIS application to engineering development, complete Docker deployment and open source release.'],
        ['聚焦智能遥感与空间计算，深耕GIS技术与应用。', 'Focus on intelligent remote sensing and spatial computing, deepen GIS technology and applications.'],
        ['持续成长，厚植基础，探索GIS技术的应用价值。', 'Continuous growth, solid foundation, exploring the application value of GIS technology.'],

        // —— notes-toc.js 目录组件文案 ——
        ['本文暂无章节标题', 'No chapter titles in this article'],
        ['未命名章节', 'Untitled Chapter'],
        ['展开', 'Expand'],
        ['折叠', 'Collapse'],
        ['子章节', 'Subsection'],

        // —— Geoscene 图表标签（月、年份等）——
        ['1月', 'Jan'],
        ['2月', 'Feb'],
        ['3月', 'Mar'],
        ['4月', 'Apr'],
        ['5月', 'May'],
        ['6月', 'Jun'],
        ['7月', 'Jul'],
        ['8月', 'Aug'],
        ['9月', 'Sep'],
        ['10月', 'Oct'],
        ['11月', 'Nov'],
        ['12月', 'Dec'],
        ['2020年', '2020'],
        ['2021年', '2021'],
        ['2022年', '2022'],
        ['2023年', '2023'],
        ['2024年', '2024'],
        ['2025年', '2025'],
        ['2026年', '2026'],
        ['词频', 'Word Frequency'],
        ['热度', 'Popularity'],
        ['降水量', 'Precipitation'],
        ['温度', 'Temperature'],
        ['气温', 'Temperature'],
        ['降水量 (mm)', 'Precipitation (mm)'],
        ['温度 (°C)', 'Temperature (°C)'],
        ['月份', 'Month'],
        ['年份', 'Year'],
        ['数据值', 'Value'],
        ['平均值', 'Average'],
        ['最大值', 'Maximum'],
        ['最小值', 'Minimum'],
        ['合计', 'Total'],
        ['排名', 'Rank'],

        // —— 补充：Others/decoder.html 更多文案 ——
        ['上传二维码图片进行解码', 'Upload QR code image for decoding'],
        ['支持拖放或点击上传', 'Support drag-and-drop or click to upload'],
        ['解码内容', 'Decoded Content'],
        ['复制内容', 'Copy Content'],
        ['重新上传', 'Re-upload'],
        ['暂无解码结果', 'No decoding result'],
        ['请上传包含二维码的图片', 'Please upload an image containing a QR code'],

        // —— 补充：Pages/Note/note-template.html 模板内容 ——
        ['这是一个带有目录的笔记模板，支持自动生成章节索引和目录切换。', 'This is a note template with table of contents, supporting automatic chapter index generation and TOC toggle.'],
        ['这是第一个章节内容，可以在这里编写正文。', 'This is the first chapter content, you can write the main text here.'],
        ['子章节内容。', 'Subsection content.'],
        ['将本模板复制后，替换内容即可创建新笔记。', 'Copy this template and replace the content to create a new note.'],
        ['自动生成文章目录', 'Automatically generate article table of contents'],
        ['支持目录显示/隐藏切换', 'Support TOC show/hide toggle'],
        ['平滑滚动到对应章节', 'Smooth scroll to corresponding chapter'],
        ['笔记持续更新中...', 'Notes are being continuously updated...'],

        // —— 补充：动态生成内容（JS 生成） ——
        ['当前课程', 'Current Class'],
        ['下一节', 'Next Period'],
        ['今天没有课', 'No classes today'],
        ['课程已结束', 'Classes ended'],
        ['距离上课还有', 'Class starts in'],
        ['分钟', 'minutes'],
        ['请稍候...', 'Please wait...'],
        ['正在加载...', 'Loading...'],
        ['加载完成', 'Loading complete'],
        ['操作成功', 'Operation successful'],
        ['操作失败', 'Operation failed'],
        ['请输入内容', 'Please enter content'],
        ['内容不能为空', 'Content cannot be empty'],
        ['搜索中...', 'Searching...'],
        ['暂无搜索结果', 'No search results'],
        ['已加载全部', 'All loaded'],
        ['加载更多', 'Load More'],
        ['没有更多了', 'No more'],
        ['查看详情', 'View Details'],
        ['查看更多', 'View More'],
        ['了解更多', 'Learn More'],
        ['立即开始', 'Start Now'],
        ['开始使用', 'Get Started'],
        ['继续阅读', 'Continue Reading'],
        ['返回顶部', 'Back to Top'],
        ['上一页', 'Previous Page'],
        ['下一页', 'Next Page'],
        ['第', 'Page'],
        ['共', 'Total'],
        ['条', 'items'],
        ['页', 'pages'],

        // —— 补充：Pages/Note/word-quiz.html 单词测试页面 ——
        ['查看词库', 'View Word Bank'],
        ['单词测试', 'Word Quiz'],
        ['随机抽测 · 即时反馈 · 巩固记忆', 'Random Quiz · Instant Feedback · Memory Consolidation'],
        ['已答 0 题', '0 questions answered'],
        ['准备开始', 'Ready to Start'],
        ['点击下方按钮开始测试', 'Click the button below to start the quiz'],
        ['开始测试', 'Start Quiz'],
        ['下一题', 'Next Question'],
        ['重新开始', 'Restart'],
        ['返回笔记索引', 'Back to Notes Index'],

        // —— 补充：Pages/Note/gallery.html 画廊页面 ——
        ['成果展示', 'Showcase'],
        ['这里展示了我以往做过的一些可视化成果图、地图作品以及项目截图。', 'Here showcases some of my past visualization works, map pieces, and project screenshots.'],
        ['图片资源存放于', 'Image resources are stored in'],
        ['图片加载中，请稍候...', 'Images loading, please wait...'],
        ['分类整理中，稍后更新。', 'Being organized, will update shortly.'],
        ['请补充该作品的简介与亮点。', 'Please add the description and highlights of this work.'],
        ['地图作品', 'Map Works'],
        ['数据可视化', 'Data Visualization'],

        // —— 补充：Pages/Note/markdown_editor.html 编辑器 UI 文案 ——
        ['已清空', 'Cleared'],
        ['已复制到剪贴板', 'Copied to clipboard'],
        ['复制失败，请手动选择复制', 'Copy failed, please select and copy manually'],
        ['已粘贴', 'Pasted'],
        ['粘贴失败，请使用 Ctrl+V', 'Paste failed, please use Ctrl+V'],
        ['实时同步', 'Real-time Sync'],
        ['编辑', 'Edit'],
        ['预览', 'Preview'],
        ['切换语言', 'Toggle Language'],
        ['切换主题', 'Toggle Theme'],
        ['复制链接', 'Copy Link'],
        ['清空内容 (Ctrl+K)', 'Clear Content (Ctrl+K)'],
        ['复制全部内容', 'Copy All Content'],
        ['从剪贴板粘贴', 'Paste from Clipboard'],
        ['标题 1', 'Heading 1'],
        ['标题 2', 'Heading 2'],
        ['标题 3', 'Heading 3'],
        ['粗体', 'Bold'],
        ['斜体', 'Italic'],
        ['删除线', 'Strikethrough'],
        ['行内代码', 'Inline Code'],
        ['引用', 'Quote'],
        ['链接', 'Link'],
        ['图片', 'Image'],
        ['无序列表', 'Unordered List'],
        ['有序列表', 'Ordered List'],
        ['表格', 'Table'],
        ['分割线', 'Horizontal Rule'],
        ['在此输入 Markdown 文本，右侧实时预览...', 'Type Markdown text here, preview on the right...'],

        // —— 补充：Pages/notes.html 笔记索引更多文案 ——
        ['搜索笔记...', 'Search notes...'],
        ['筛选条件', 'Filter Conditions'],
        ['清除筛选', 'Clear Filters'],
        ['排序方式', 'Sort By'],
        ['按日期', 'By Date'],
        ['按标题', 'By Title'],
        ['按分类', 'By Category'],
        ['升序', 'Ascending'],
        ['降序', 'Descending'],

        // —— 补充：Pages/phy.html 物理模拟 UI 文案 ——
        ['🖱️ 鼠标左键拖拽纸张 &nbsp;|&nbsp;顶部固定 · 微风轻拂 &nbsp;|&nbsp;R键 重置', '🖱️ Left-click to drag paper &nbsp;|&nbsp;Top fixed · Gentle breeze &nbsp;|&nbsp;R key to reset']
    ];

    var PAGE_TITLE_MAP = {
        'index.html': {
            zh: 'NEGIAO - 主页',
            en: 'NEGIAO - GitHub Page'
        },
        'Pages/notes.html': {
            zh: '笔记索引 - NEGIAO',
            en: 'Notes Index - NEGIAO'
        },
        'Pages/schedule.html': {
            zh: '课程表 - NEGIAO',
            en: 'Schedule - NEGIAO'
        },
        'Others/decoder.html': {
            zh: 'NEGIAO工具 - 二维码解码',
            en: 'NEGIAO Tools - QR Decoder'
        },
        'Pages/Note/word-quiz.html': {
            zh: '单词测试 - NEGIAO',
            en: 'Word Quiz - NEGIAO'
        },
        'Pages/Note/gallery.html': {
            zh: '成果展示 - NEGIAO',
            en: 'Gallery - NEGIAO'
        },
        'Pages/Note/markdown_editor.html': {
            zh: 'Markdown 编辑器 - NEGIAO',
            en: 'Markdown Editor - NEGIAO'
        },
        'Pages/Note/note-template.html': {
            zh: '笔记模板 - NEGIAO',
            en: 'Note Template - NEGIAO'
        },
        'Pages/Note/note-viewer/note-viewer.html': {
            zh: '笔记详情 - NEGIAO',
            en: 'Note Details - NEGIAO'
        },
        'Pages/Self_Intro.html': {
            zh: '姚乃高 - 中科院地理所夏令营答辩演练',
            en: 'Yao Naigao - CAS Geography Institute Summer Camp Defense'
        },
        'Pages/phy.html': {
            zh: 'DeepSeek V4 3D柔性纸张物理模拟测试',
            en: 'DeepSeek V4 3D Flexible Paper Physics Simulation Test'
        },
        'Pages/WebGIS_task/index.html': {
            zh: 'WebGIS Workspace',
            en: 'WebGIS Workspace'
        },
        '404.html': {
            zh: '404 - 页面未找到 | NEGIAO',
            en: '404 - Page Not Found | NEGIAO'
        },
        'Geoscene_宝藏小城/awesome.html': {
            zh: '宝藏小城 - 总览',
            en: 'Treasure City - Overview'
        },
        'Geoscene_宝藏小城/wordcloud.html': {
            zh: '地区词云图 - NEGIAO',
            en: 'Regional Word Cloud - NEGIAO'
        }
    };

    var PAGE_META_MAP = {
        'index.html': {
            description: {
                zh: 'NEGIAO的个人 GitHub 页面 - WebGIS、数据可视化和地理空间技术',
                en: 'NEGIAO\'s personal GitHub page focused on WebGIS, data visualization, and geospatial technologies.'
            }
        },
        'Pages/notes.html': {
            description: {
                zh: 'NEGIAO的技术笔记索引 - WebGIS、数据可视化和前端开发学习心得与实践总结',
                en: 'NEGIAO\'s technical notes index with learning takeaways from WebGIS, data visualization, and frontend development.'
            }
        },
        'Pages/schedule.html': {
            description: {
                zh: 'NEGIAO的日常课表 - 实时显示当前课程和下节课安排',
                en: 'NEGIAO\'s daily schedule, showing the current and next classes in real time.'
            }
        },
        'Others/decoder.html': {
            description: {
                zh: 'NEGIAO工具 - 二维码解码页面',
                en: 'NEGIAO Tools - QR code decoding page.'
            }
        },
        'Pages/Note/word-quiz.html': {
            description: {
                zh: 'NEGIAO英语单词测试系统 - 随机测验，巩固记忆',
                en: 'NEGIAO English Word Quiz System - random quiz, consolidate memory.'
            }
        },
        'Pages/Note/gallery.html': {
            description: {
                zh: 'NEGIAO的成果展示画廊 - 往期作品与可视化成果',
                en: "NEGIAO's achievement gallery - past works and visualization results."
            }
        },
        'Pages/Note/markdown_editor.html': {
            description: {
                zh: '实时Markdown编辑器 - 支持实时预览的在线Markdown写作工具',
                en: 'Real-time Markdown editor - online Markdown writing tool with live preview.'
            }
        },
        'Pages/Note/note-template.html': {
            description: {
                zh: 'NEGIAO的技术笔记模板',
                en: "NEGIAO's technical note template."
            }
        },
        'Pages/Note/note-viewer/note-viewer.html': {
            description: {
                zh: 'NEGIAO的技术笔记',
                en: "NEGIAO's technical notes."
            }
        },
        'Pages/Self_Intro.html': {
            description: {
                zh: '中科院地理所夏令营答辩演练 - 姚乃高',
                en: 'CAS Geography Institute Summer Camp Defense - Yao Naigao.'
            }
        },
        'Pages/phy.html': {
            description: {
                zh: '基于Three.js与Verlet积分的高保真柔性纸张物理模拟',
                en: 'High-fidelity flexible paper physics simulation based on Three.js and Verlet integration.'
            }
        },
        'Pages/WebGIS_task/index.html': {
            description: {
                zh: 'WebGIS 实验作业 - 基于 OpenLayers 的 WebGIS 开发实践',
                en: 'WebGIS Experimental Tasks - WebGIS Development Practice Based on OpenLayers.'
            }
        },
        '404.html': {
            description: {
                zh: '页面未找到 - NEGIAO',
                en: 'Page Not Found - NEGIAO.'
            }
        },
        'Geoscene_宝藏小城/awesome.html': {
            description: {
                zh: '宝藏小城总览 - 六城季节变化数据可视化项目',
                en: 'Treasure City overview - seasonal-change visualization of six cities.'
            }
        },
        'Geoscene_宝藏小城/wordcloud.html': {
            description: {
                zh: '地区词云图 - 基于词频统计的可视化展示',
                en: 'Regional word cloud - visualization based on word frequency statistics.'
            }
        }
    };

    var CITY_TRANSLATIONS = {
        '利川市': 'Lichuan',
        '淮安市': 'Huaian',
        '荣成市': 'Rongcheng',
        '象山县': 'Xiangshan',
        '铜仁市': 'Tongren',
        '隰县': 'Xi County',
        // —— 补充城市 ——
        '北京市': 'Beijing',
        '上海市': 'Shanghai',
        '天津市': 'Tianjin',
        '重庆市': 'Chongqing',
        '广州市': 'Guangzhou',
        '深圳市': 'Shenzhen',
        '杭州市': 'Hangzhou',
        '南京市': 'Nanjing',
        '武汉市': 'Wuhan',
        '成都市': 'Chengdu',
        '西安市': "Xi'an",
        '长沙市': 'Changsha',
        '郑州市': 'Zhengzhou',
        '青岛市': 'Qingdao',
        '大连市': 'Dalian',
        '厦门市': 'Xiamen',
        '福州市': 'Fuzhou',
        '昆明市': 'Kunming',
        '合肥市': 'Hefei',
        '南昌市': 'Nanchang',
        '石家庄市': 'Shijiazhuang',
        '太原市': 'Taiyuan',
        '济南市': 'Jinan',
        '无锡市': 'Wuxi',
        '苏州市': 'Suzhou',
        '宁波市': 'Ningbo',
        '温州市': 'Wenzhou',
        '佛山市': 'Foshan',
        '东莞市': 'Dongguan',
        '贵阳市': 'Guiyang',
        '南宁市': 'Nanning',
        '海口市': 'Haikou',
        '兰州市': 'Lanzhou',
        '银川市': 'Yinchuan',
        '西宁市': 'Xining',
        '拉萨市': 'Lhasa',
        '乌鲁木齐市': 'Urumqi',
        '呼和浩特市': 'Hohhot',
        '沈阳市': 'Shenyang',
        '长春市': 'Changchun',
        '哈尔滨市': 'Harbin',
        '洛阳市': 'Luoyang',
        '开封市': 'Kaifeng',
        '南阳市': 'Nanyang',
        '新乡市': 'Xinxiang',
        '襄阳市': 'Xiangyang',
        '宜昌市': 'Yichang',
        '岳阳市': 'Yueyang',
        '衡阳市': 'Hengyang',
        '株洲市': 'Zhuzhou',
        '桂林市': 'Guilin',
        '三亚市': 'Sanya',
        '珠海市': 'Zhuhai',
        '汕头市': 'Shantou',
        '徐州市': 'Xuzhou',
        '扬州市': 'Yangzhou',
        '南通市': 'Nantong',
        '绍兴市': 'Shaoxing',
        '嘉兴市': 'Jiaxing',
        '台州市': 'Taizhou',
        '金华市': 'Jinhua',
        '芜湖市': 'Wuhu',
        '九江市': 'Jiujiang',
        '赣州市': 'Ganzhou',
        '烟台市': 'Yantai',
        '潍坊市': 'Weifang',
        '临沂市': 'Linyi',
        '济宁市': 'Jining',
        '邯郸市': 'Handan',
        '保定市': 'Baoding',
        '唐山市': 'Tangshan',
        '秦皇岛市': 'Qinhuangdao',
        '邯郸市': 'Handan',
        '邢台市': 'Xingtai',
        '张家口市': 'Zhangjiakou',
        '承德市': 'Chengde',
        '沧州市': 'Cangzhou',
        '廊坊市': 'Langfang',
        '衡水市': 'Hengshui',
        '大同市': 'Datong',
        '阳泉市': 'Yangquan',
        '长治市': 'Changzhi',
        '晋城市': 'Jincheng',
        '朔州市': 'Shuozhou',
        '晋中市': 'Jinzhong',
        '运城市': 'Yuncheng',
        '忻州市': 'Xinzhou',
        '临汾市': 'Linfen',
        '吕梁市': 'Lvliang',
        '包头市': 'Baotou',
        '乌海市': 'Wuhai',
        '赤峰市': 'Chifeng',
        '通辽市': 'Tongliao',
        '鄂尔多斯市': 'Ordos',
        '呼伦贝尔市': 'Hulunbuir',
        '巴彦淖尔市': 'Bayannur',
        '乌兰察布市': 'Ulanqab',
        '鞍山市': 'Anshan',
        '抚顺市': 'Fushun',
        '本溪市': 'Benxi',
        '丹东市': 'Dandong',
        '锦州市': 'Jinzhou',
        '营口市': 'Yingkou',
        '阜新市': 'Fuxin',
        '辽阳市': 'Liaoyang',
        '盘锦市': 'Panjin',
        '铁岭市': 'Tieling',
        '朝阳市': 'Chaoyang',
        '葫芦岛市': 'Huludao',
        '吉林市': 'Jilin',
        '四平市': 'Siping',
        '辽源市': 'Liaoyuan',
        '通化市': 'Tonghua',
        '白山市': 'Baishan',
        '松原市': 'Songyuan',
        '白城市': 'Baicheng',
        '齐齐哈尔市': 'Qiqihar',
        '鸡西市': 'Jixi',
        '鹤岗市': 'Hegang',
        '双鸭山市': 'Shuangyashan',
        '大庆市': 'Daqing',
        '伊春市': 'Yichun',
        '佳木斯市': 'Jiamusi',
        '七台河市': 'Qitaihe',
        '牡丹江市': 'Mudanjiang',
        '黑河市': 'Heihe',
        '绥化市': 'Suihua'
    };

    var SECTION_TRANSLATIONS = {
        '季节变化': 'Seasonal Variation',
        '年内变化': 'Annual Cycle',
        '年际变化': 'Interannual Variation',
        // —— 补充分段维度 ——
        '空间分布': 'Spatial Distribution',
        '时间序列': 'Time Series',
        '温度变化': 'Temperature Variation',
        '降水变化': 'Precipitation Variation',
        '湿度变化': 'Humidity Variation',
        '风速变化': 'Wind Speed Variation',
        '日照变化': 'Sunshine Variation',
        '蒸发变化': 'Evaporation Variation',
        '气压变化': 'Pressure Variation',
        '植被变化': 'Vegetation Variation',
        '土地利用': 'Land Use',
        '土地覆盖': 'Land Cover',
        '城市扩张': 'Urban Expansion',
        '人口分布': 'Population Distribution',
        'GDP分布': 'GDP Distribution',
        '夜间灯光': 'Nighttime Light',
        '热岛效应': 'Heat Island Effect',
        '气候变化': 'Climate Change',
        '干旱监测': 'Drought Monitoring',
        '洪涝监测': 'Flood Monitoring',
        '植被覆盖': 'Vegetation Coverage',
        '土壤湿度': 'Soil Moisture',
        '积雪覆盖': 'Snow Cover',
        '海表温度': 'Sea Surface Temperature',
        '气溶胶光学厚度': 'Aerosol Optical Depth',
        'PM2.5浓度': 'PM2.5 Concentration',
        '空气质量': 'Air Quality',
        '生态环境': 'Ecological Environment',
        '自然灾害': 'Natural Disasters',
        '地震活动': 'Seismic Activity',
        '地质灾害': 'Geological Hazards',
        '水资源': 'Water Resources',
        '森林资源': 'Forest Resources',
        '农田分布': 'Farmland Distribution',
        '交通网络': 'Transportation Network',
        '基础设施': 'Infrastructure',
        '公共服务': 'Public Services',
        '行政区划': 'Administrative Division',
        '边界变化': 'Boundary Change'
    };

    var textMap = {
        zh: {},
        en: {}
    };

    COMMON_TEXT_PAIRS.forEach(function (pair) {
        var zhText = pair[0];
        var enText = pair[1];
        // 过滤空字符串和短 key：短 key 会污染正则，导致子串误匹配。
        // 阈值：中文 >= 2 字符，英文 >= 5 字符。
        // 英文 < 5 仍会产生大量子串冲突（如 Map→地图 匹配 MapView，API→接口 匹配 RapidAPI），
        // 改用单词边界断言 \b 后放宽到 >= 3，但 3-4 字符的英文 key 仍需额外谨慎。
        if (!zhText || zhText.length < 2) return;
        if (!enText || enText.length < 5) return;
        // 去重：同一 key 只保留第一个出现的 pair，防止后面的 self-mapping 覆盖正确翻译。
        if (!Object.prototype.hasOwnProperty.call(textMap.zh, enText)) {
            textMap.zh[enText] = zhText;
        }
        if (!Object.prototype.hasOwnProperty.call(textMap.en, zhText)) {
            textMap.en[zhText] = enText;
        }
    });

    // 预编译翻译正则：将全部词条合并为单个正则（按长度降序保证最长优先匹配）。
    // 旧实现对每个文本节点执行 Object.keys().sort() + 逐词 indexOf，
    // 复杂度为 O(文本节点数 × 词条数 × 文本长度)，是大页面 CPU 占用的主要来源之一。
    //
    // 关键修复：按长度降序排列确保最长词条优先匹配，防止短词条在已翻译的长文本中
    // 发生子串误匹配（例如 '条'→'items' 不会在 'Back Home' 中误匹配）。
    var compiledPattern = { zh: null, en: null };
    function getCompiledPattern(lang) {
        if (compiledPattern[lang] === null) {
            var keys = Object.keys(textMap[lang]).sort(function (a, b) {
                return b.length - a.length;
            });
            compiledPattern[lang] = keys.length
                ? new RegExp(keys.map(escapeRegExp).join('|'), 'g')
                : false;
        }
        return compiledPattern[lang] || null;
    }

    // 整棵子树跳过的选择器（含 data-no-i18n：笔记正文等用户内容不参与 UI 词条翻译）
    var SKIP_SELECTOR = 'script, style, noscript, code, pre, textarea, svg, canvas, math, .negiao-lang-toggle, .negiao-lang-toggle--nav, [data-no-i18n]';

    var OBSERVE_OPTIONS = {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['title', 'aria-label', 'data-title', 'placeholder', 'alt']
    };

    // 增量翻译队列：超过上限则退化为整页扫描一次
    var MAX_PENDING_ROOTS = 40;

    var state = {
        lang: normalizeLang(readStoredLanguage()),
        observer: null,
        rafId: 0,
        isApplying: false,
        pendingRoots: [],
        pendingFull: false
    };

    function normalizeLang(lang) {
        return lang === 'en' ? 'en' : 'zh';
    }

    function readStoredLanguage() {
        try {
            return window.localStorage.getItem(STORAGE_KEY) ||
                window.localStorage.getItem(LEGACY_STORAGE_KEY) || '';
        } catch (error) {
            return '';
        }
    }

    function writeStoredLanguage(lang) {
        try {
            window.localStorage.setItem(STORAGE_KEY, lang);
        } catch (error) {
            // Ignore storage failures in private mode or blocked storage environments.
        }
    }

    function detectDefaultLanguage() {
        var stored = readStoredLanguage();
        return stored ? normalizeLang(stored) : DEFAULT_LANG;
    }

    function getPagePath() {
        var path = (window.location.pathname || '').replace(/\\/g, '/');
        if (!path) {
            return 'index.html';
        }
        var repoMarker = 'NEGIAO.github.io/';
        var markerIndex = path.indexOf(repoMarker);
        if (markerIndex !== -1) {
            path = path.slice(markerIndex + repoMarker.length);
        } else if (path.charAt(0) === '/') {
            path = path.slice(1);
        }
        return path;
    }

    function escapeRegExp(text) {
        return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function translateString(input, lang) {
        if (typeof input !== 'string' || !input) {
            return input;
        }

        var pattern = getCompiledPattern(lang);
        if (!pattern) {
            return input;
        }

        var map = textMap[lang];
        // 全局替换：正则已按长度降序排列，确保长词条优先匹配。
        // replace 会自动重置 lastIndex，无需手动置零。
        return input.replace(pattern, function (matched) {
            return Object.prototype.hasOwnProperty.call(map, matched) ? map[matched] : matched;
        });
    }

    function resolveGeosceneTitle(path, lang) {
        if (path.indexOf('Geoscene_宝藏小城/') === -1) {
            return '';
        }

        var fileName = path.split('/').pop() || '';
        if (fileName === 'awesome.html') {
            return lang === 'en' ? 'Treasure City - Overview' : '宝藏小城 - 总览';
        }
        if (fileName === 'wordcloud.html') {
            return lang === 'en' ? 'Regional Word Cloud - NEGIAO' : '地区词云图 - NEGIAO';
        }

        var cityName = '';
        Object.keys(CITY_TRANSLATIONS).forEach(function (key) {
            if (fileName.indexOf(key) !== -1) {
                cityName = key;
            }
        });

        var sectionName = '';
        Object.keys(SECTION_TRANSLATIONS).forEach(function (key) {
            if (fileName.indexOf(key) !== -1) {
                sectionName = key;
            }
        });

        if (!cityName || !sectionName) {
            return '';
        }

        if (lang === 'en') {
            return CITY_TRANSLATIONS[cityName] + ' - ' + SECTION_TRANSLATIONS[sectionName];
        }

        return cityName + ' - ' + sectionName;
    }

    function resolvePageTitle(path, lang) {
        var fileName = path.split('/').pop() || '';
        var pageKey = path;

        if (PAGE_TITLE_MAP[pageKey]) {
            return PAGE_TITLE_MAP[pageKey][lang];
        }

        var geosceneTitle = resolveGeosceneTitle(path, lang);
        if (geosceneTitle) {
            return geosceneTitle;
        }

        if (fileName === 'note-viewer.html') {
            return translateString(document.title || '', lang);
        }

        return translateString(document.title || '', lang);
    }

    function applyMetaContent(selector, value) {
        if (!value) {
            return;
        }

        document.querySelectorAll(selector).forEach(function (element) {
            // 仅在值变化时写入：无条件 setAttribute 会触发 MutationObserver，
            // 曾导致“翻译→变更→再翻译”的无限循环
            if (element.getAttribute('content') !== value) {
                element.setAttribute('content', value);
            }
        });
    }

    function applyPageMeta(path, lang) {
        var title = resolvePageTitle(path, lang);
        if (title) {
            if (document.title !== title) {
                document.title = title;
            }
            var titleHolder = document.getElementById('page-title');
            if (titleHolder && titleHolder.textContent !== title) {
                titleHolder.textContent = title;
            }
        }

        var meta = PAGE_META_MAP[path];
        if (meta && meta.description && meta.description[lang]) {
            var description = meta.description[lang];
            var descriptionMeta = document.querySelector('meta[name="description"]');
            if (descriptionMeta) {
                descriptionMeta.setAttribute('content', description);
            }
            applyMetaContent('meta[property="og:description"]', description);
            applyMetaContent('meta[property="twitter:description"]', description);
        }

        if (title) {
            applyMetaContent('meta[property="og:title"]', title);
            applyMetaContent('meta[property="twitter:title"]', title);
        }
    }

    function isInsideSkipped(element) {
        return Boolean(element && element.closest && element.closest(SKIP_SELECTOR));
    }

    function translateTextNodes(root, lang) {
        if (!root) {
            return;
        }
        if (root.nodeType === 3) {
            root = root.parentElement;
        }
        if (!root || root.nodeType !== 1 || isInsideSkipped(root)) {
            return;
        }

        var walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
            acceptNode: function (node) {
                if (node.nodeType === 1) {
                    return node.matches(SKIP_SELECTOR)
                        ? NodeFilter.FILTER_REJECT
                        : NodeFilter.FILTER_SKIP;
                }
                if (!node.nodeValue || !node.nodeValue.trim()) {
                    return NodeFilter.FILTER_REJECT;
                }
                // 已翻译过的文本节点跳过，防止 MutationObserver 触发二次翻译
                if (isTranslated(node, lang)) {
                    return NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        var current = walker.nextNode();
        while (current) {
            var original = current.nodeValue;
            var translated = translateString(original, lang);
            if (translated !== original) {
                current.nodeValue = translated;
                markTranslated(current, lang);
            }
            current = walker.nextNode();
        }
    }

    function translateAttributes(root, lang) {
        if (!root) {
            return;
        }
        if (root.nodeType === 3) {
            root = root.parentElement;
        }
        if (!root || root.nodeType !== 1 || isInsideSkipped(root)) {
            return;
        }

        var selectors = '[title], [aria-label], [data-title], [placeholder], img[alt]';
        var elements = [];
        if (root.matches(selectors)) {
            elements.push(root);
        }
        root.querySelectorAll(selectors).forEach(function (element) {
            elements.push(element);
        });

        elements.forEach(function (element) {
            if (isInsideSkipped(element)) {
                return;
            }
            ['title', 'aria-label', 'data-title', 'placeholder', 'alt'].forEach(function (attributeName) {
                if (!element.hasAttribute(attributeName)) {
                    return;
                }
                var value = element.getAttribute(attributeName);
                if (!value) {
                    return;
                }
                var translated = translateString(value, lang);
                if (translated !== value) {
                    element.setAttribute(attributeName, translated);
                }
            });
        });
    }

    function updateButtonLabel(button, lang) {
        var text = lang === 'en' ? '\u4e2d' : 'EN';
        var label = lang === 'en' ? '\u5207\u6362\u5230\u4e2d\u6587' : 'Switch to English';
        var pressed = String(lang === 'en');
        var labelElement = button.querySelector('.negiao-lang-label');

        if (labelElement) {
            if (labelElement.textContent !== text) labelElement.textContent = text;
        } else {
            button.textContent = text;
        }
        if (button.getAttribute('aria-label') !== label) button.setAttribute('aria-label', label);
        if (button.getAttribute('title') !== label) button.setAttribute('title', label);
        if (button.getAttribute('aria-pressed') !== pressed) button.setAttribute('aria-pressed', pressed);
    }

    function syncToggleButtons(lang) {
        document.querySelectorAll('.negiao-lang-toggle, .negiao-lang-toggle--nav').forEach(function (button) {
            updateButtonLabel(button, lang);
        });
    }

    function bindButton(button) {
        if (button.dataset.nwLangBound === 'true') return;
        button.dataset.nwLangBound = 'true';
        button.addEventListener('click', function () {
            setLanguage(state.lang === 'en' ? 'zh' : 'en');
        });
    }

    function createToggleButton(isNav, isFloating) {
        var button = document.createElement('button');
        button.type = 'button';
        button.className = (isNav ? 'negiao-lang-toggle--nav' : 'negiao-lang-toggle') +
            ' navbar-widget-btn' + (isFloating ? ' negiao-lang-toggle--floating' : '');
        button.setAttribute('aria-pressed', 'false');
        button.innerHTML = '<i class="fas fa-globe" aria-hidden="true"></i> ' +
            '<span class="negiao-lang-label">EN</span>';
        bindButton(button);
        return button;
    }

    function mount(container) {
        if (!container) return false;

        var isNav = container.classList.contains('notes-navbar') ||
            container.classList.contains('note-viewer-navbar');
        var selector = isNav ? '.negiao-lang-toggle--nav' : '.negiao-lang-toggle';
        var button = container.querySelector(selector);

        if (!button) {
            button = createToggleButton(isNav, false);
            container.appendChild(button);
        } else {
            bindButton(button);
        }
        updateButtonLabel(button, state.lang);
        return true;
    }

    function mountButtons() {
        var containers = [
            document.querySelector('.navbar__container'),
            document.querySelector('.sidebar__footer'),
            document.querySelector('.notes-navbar'),
            document.querySelector('.note-viewer-navbar')
        ];
        var seen = [];
        var mounted = false;

        containers.forEach(function (container) {
            if (!container || seen.indexOf(container) !== -1) return;
            seen.push(container);
            mounted = mount(container) || mounted;
        });

        if (!mounted && document.body) {
            var existing = document.querySelector('.negiao-lang-toggle--floating');
            var button = existing || createToggleButton(false, true);
            if (!existing) document.body.appendChild(button);
            bindButton(button);
            updateButtonLabel(button, state.lang);
        }
    }

    // 已翻译文本节点集合：WeakSet 精确到节点级别，避免 DOM 属性标记的副作用。
    // 记录的是「在某语言下已被翻译过的文本节点」，切换语言时清除。
    var translatedNodes = new WeakSet();

    function isTranslated(node, lang) {
        return translatedNodes.has(node) && translatedNodes._lang === lang;
    }

    function markTranslated(node, lang) {
        translatedNodes.add(node);
        translatedNodes._lang = lang;
    }

    function clearTranslatedNodes() {
        translatedNodes = new WeakSet();
        translatedNodes._lang = '';
    }

    function translatePage(lang, roots) {
        if (state.isApplying) {
            return;
        }

        state.isApplying = true;

        // 切换语言时清除上一轮标记，确保新方向能重新翻译所有节点
        if (!roots) {
            clearTranslatedNodes();
        }

        // 应用期间断开监听：自身写入不再产生变更记录（disconnect 会清空待处理队列），
        // 从根源上杜绝”翻译 → 触发变更 → 再翻译”的无限循环（此前 CPU 打满的主因）
        var wasObserving = Boolean(state.observer);
        if (wasObserving) {
            state.observer.disconnect();
        }

        var docEl = document.documentElement;
        var langAttr = lang === 'en' ? 'en' : 'zh-CN';
        if (docEl.getAttribute('lang') !== langAttr) {
            docEl.setAttribute('lang', langAttr);
        }
        if (docEl.getAttribute('data-lang') !== lang) {
            docEl.setAttribute('data-lang', lang);
        }

        applyPageMeta(getPagePath(), lang);

        if (roots && roots.length) {
            // 增量模式：只翻译发生变更的子树
            roots.forEach(function (node) {
                translateTextNodes(node, lang);
                translateAttributes(node, lang);
            });
        } else {
            var root = document.body || document.documentElement;
            if (root) {
                translateTextNodes(root, lang);
                translateAttributes(root, lang);
            }
        }

        syncToggleButtons(lang);

        // 先解除应用状态，再重连 observer，避免 reconnect 后的首次 mutation 被误判
        state.isApplying = false;

        if (wasObserving) {
            observeDocument();
        }
    }

    // 去重：丢弃已脱离文档的节点、被其他待处理根包含的节点
    function dedupeRoots(list) {
        var out = [];
        for (var i = 0; i < list.length; i++) {
            var node = list[i];
            if (!node) {
                continue;
            }
            if (node.nodeType === 3) {
                node = node.parentElement;
            }
            if (!node || node.nodeType !== 1 || !node.isConnected) {
                continue;
            }
            var covered = false;
            for (var j = 0; j < out.length; j++) {
                if (out[j] === node || out[j].contains(node)) {
                    covered = true;
                    break;
                }
            }
            if (!covered) {
                out.push(node);
            }
        }
        return out;
    }

    function queueRoots(targets) {
        if (state.pendingFull) {
            return;
        }
        for (var i = 0; i < targets.length; i++) {
            if (state.pendingRoots.length >= MAX_PENDING_ROOTS) {
                state.pendingFull = true;
                state.pendingRoots.length = 0;
                return;
            }
            state.pendingRoots.push(targets[i]);
        }
    }

    function scheduleTranslate(lang, targets) {
        if (targets && targets.length) {
            queueRoots(targets);
        } else {
            state.pendingFull = true;
            state.pendingRoots.length = 0;
        }

        if (state.rafId) {
            return;
        }
        state.rafId = requestAnimationFrame(function () {
            state.rafId = 0;
            var roots = state.pendingFull ? null : dedupeRoots(state.pendingRoots);
            state.pendingFull = false;
            state.pendingRoots = [];
            translatePage(state.lang, roots);
        });
    }

    function setLanguage(lang) {
        var normalized = normalizeLang(lang);
        state.lang = normalized;
        writeStoredLanguage(normalized);
        translatePage(normalized);
        window.dispatchEvent(new CustomEvent('negiao:langchange', { detail: { lang: normalized } }));
    }

    function observeDocument() {
        state.observer.observe(document.documentElement, OBSERVE_OPTIONS);
    }

    function initObserver() {
        if (!('MutationObserver' in window)) {
            return;
        }

        state.observer = new MutationObserver(function (mutations) {
            if (state.isApplying) {
                return;
            }

            // 收集具体变更目标，按子树增量翻译，不再对整页做全量扫描
            var targets = [];
            for (var i = 0; i < mutations.length; i++) {
                var mutation = mutations[i];
                if (mutation.type === 'childList') {
                    for (var j = 0; j < mutation.addedNodes.length; j++) {
                        targets.push(mutation.addedNodes[j]);
                    }
                } else if (mutation.type === 'characterData' || mutation.type === 'attributes') {
                    targets.push(mutation.target);
                }
            }

            if (targets.length) {
                scheduleTranslate(state.lang, targets);
            }
        });

        observeDocument();
    }

    function init() {
        mountButtons();

        if (!state.initialized) {
            state.initialized = true;
            state.lang = detectDefaultLanguage();
            writeStoredLanguage(state.lang);
            translatePage(state.lang);
            initObserver();
        } else {
            // 重复调用时（SPA 路由复用、HMR）重建 observer 并全量翻译
            if (state.observer) {
                state.observer.disconnect();
            }
            clearTranslatedNodes();
            translatePage(state.lang);
            initObserver();
        }
    }

    state.initialized = false;
    window.initLangToggle = init;
    window.setNegiaoLanguage = setLanguage;
})();
