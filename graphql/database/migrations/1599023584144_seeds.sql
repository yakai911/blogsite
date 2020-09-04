INSERT INTO roles
    (title)
VALUES
    ('admin'),
    ('blogger');

INSERT INTO permissions
    (action)
VALUES
    ('post'),
    ('manage-users');

INSERT INTO roles_permissions
    (role_id,permission_id)
VALUES
    (1, 1),
    (1, 2),
    (2, 1);

INSERT INTO users
    (role_id,email,name)
VALUES
    (1, 'hapmoniym@gmail.com', 'hapmoniym');

INSERT INTO blog_categories
    (label,description)
VALUES
    ('poetry', '源自梦境片段的诗'),
    ('novel', '源自梦境片段的小说');

INSERT INTO blog_posts
    (author_id,title,description,text,image,active,keyword1,keyword2,bg_src,bg_type)
VALUES
    (1, '吞咽', '这故事中的恶心像履带里嵌着泥土/ 恐惧让叙述变得扁平，无法去叙述/ 确实有两个人死了，无法说怎么被那个小孩/ 残害。他有种脐带都扯不住的表情 只会发笑没有逆境', '', 'poetry3.jpg', '1', 'poetry', 'dream', 'poetry3', '.jpg'),
    (1, '拍摄美洲狮', '我拿着手机，在一间石棉瓦房附近，这是次田野调查。在不折不扣的田野里，手机开着照相模式，正发愁该拍些什么照片，突然有张嘴出现在了取景框里，极其缓慢露出它粉红色的、磨砂质地的舌头。', '', 'lion.png', '1', 'novel', 'dream', 'lion', '.png');
(1, '驴脸', '如果仔细看就会觉得这头驴真的很老很老了，甚至快要长出胡子了，我是说山羊的那种胡子。', '', 'pic2.png', '1', 'novel', 'dream', 'pic', '.png'),
(1, '同事朋友', '到晚上这个地方就会完全变样的——灯光把所有装满器械的建筑牵连起来，像荧光化的基因族谱，像桥下流动的水浪，用永远断不了的样子去冲刷泛光的夜晚。', '', 'lion.png', '1', 'novel', 'dream', 'lion', '.png');


INSERT INTO blog_post_comments
    (post_id,author_id,comment)
VALUES
    (1, 1, 'Not bad!'),
    (1, 1, 'A dream?');

INSERT INTO blog_post_categories
    (post_id,category_id)
VALUES
    (1, 1),
    (2, 2);
 







