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
    (author_id,title,text,image,active,keyword1,keyword2,bg_src,bg_type)
VALUES
    (1, '吞咽', '这故事中的恶心像履带里嵌着泥土 恐惧让叙述变得扁平，无法去叙述', 'swallow', '1', 'poemtry', 'dream', 'poetry3', '.jpg'),
    (1, '拍摄美洲狮', '我拿着手机，在一间石棉瓦房附近，这是次田野调查。在不折不扣的田野里，我用手机开着照相模式，正发愁该拍些什么照片，突然有张嘴出现在了取景框里，极其缓慢露出它粉红色的、磨砂质地的舌头。', 'lion', '1', 'novel', 'dream', 'lion', '.png');

INSERT INTO blog_post_comments
    (post_id,author_id,comment)
VALUES
    (1, 1, 'not bad!'),
    (1, 1, 'a dream');








