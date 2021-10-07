INSERT INTO category (category_name)
VALUES
  ('Shirts'),
  ('Shorts'),
  ('Hats'),
  ('Shoes');

INSERT INTO tag (id, tag_name) VALUES ('1', 'Hardcore rapp music');
INSERT INTO tag (id, tag_name) VALUES ('2', 'pop music');
INSERT INTO tag (id, tag_name) VALUES ('3', 'blue');
INSERT INTO tag (id, tag_name) VALUES ('4', 'red');
INSERT INTO tag (id, tag_name) VALUES ('5', 'green');
INSERT INTO tag (id, tag_name) VALUES ('6', 'white');
INSERT INTO tag (id, tag_name) VALUES ('7', 'gold');
INSERT INTO tag (id, tag_name) VALUES ('8', 'pop culture'); 

UPDATE product SET product_name = 'Plain T-Shirt' WHERE (id = '1');
UPDATE product SET price = '90.0' WHERE (id = '2');
UPDATE product SET price = '12.99' WHERE (id = '4');
UPDATE product SET price = '29.99' WHERE (id = '5');

INSERT INTO product_tag (id, product_id, tag_id) VALUES ('1', '1', '1');
INSERT INTO product_tag (id, product_id, tag_id) VALUES ('2', '2', '2');
INSERT INTO product_tag (id, product_id, tag_id) VALUES ('3', '3', '3');
INSERT INTO product_tag (id, product_id, tag_id) VALUES ('4', '4', '4');
INSERT INTO product_tag (id, product_id, tag_id) VALUES ('5', '5', '5');
INSERT INTO product_tag (id, product_id, tag_id) VALUES ('6', '6', '6');
INSERT INTO product_tag (id, product_id, tag_id) VALUES ('7', '7', '7');
INSERT INTO product_tag (id, product_id, tag_id) VALUES ('8', '8', '8');
INSERT INTO product_tag (id, product_id, tag_id) VALUES ('9', '9', '8');
INSERT INTO product_tag (id, product_id, tag_id) VALUES ('10', '10', '10');
