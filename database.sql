create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    position VARCHAR(255)
);

create TABLE house(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id),
    city VARCHAR(255),
    type VARCHAR(255),
    area INTEGER,
    rancho BOOLEAN
);

create TABLE car(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id),
    manufacturer VARCHAR(255),
    model VARCHAR(255) NOT NULL,
    color VARCHAR(255),
    date_of_purchase DATE DEFAULT CURRENT_DATE
);