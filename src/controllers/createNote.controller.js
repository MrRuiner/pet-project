import { db } from "../config/db.js";
import { Note, User } from "../model/model.js";

export const getAll = (req, res) => {
    Note.findAll()
        .then(notes => {
            res.render('main', {
                notes
            })
        })
        .catch(err => console.log(err));
}

export const addNote = (req, res) => {

    let { title, content } = req.body;

    let errors = []

    if (!title) {
        errors.push({ text: 'Пожалуйста введите название.' })
    }

    if (!content) {
        errors.push({ text: 'Пожалуйста введите текст.' })
    }

    if (errors.length > 0) {
        res.render('add', {
            title,
            content,
            errors
        })
    } else {
        Note.create({
            title,
            content
        })
            .then(res.redirect('/'))
            .catch(err => {
                console.log(err)
                res.sendStatus(500)
            });
    }
}

export const deleteNote = (req, res) => {
    Note.destroy({ where: { id: req.params.id } })
        .then(res.redirect('/'))
        .catch(err => console.log(err))
}

export const updateNote = async (req, res) => {
    const { id } = req.params;
    const { updTitle, updContent } = req.body;

    try {
        const updatedRows = await Note.update(
            { title: updTitle, content: updContent },
            { where: { id: id } }
        );

        if (updatedRows > 0) {
            res.redirect('/');
        } else {
            res.status(404).send('Заметка не найдена или не была обновлена.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка при обновлении заметки.');
    }
}

export const getUpdPage = async (req, res) => {
    try {
        const note = await Note.findByPk(req.params.id); // Ищем запись по ID
        if (!note) {
            return res.status(404).send('Запись не найдена');
        }
        res.render('update', { note }); // Рендерим шаблон с данными записи
    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка сервера');
    }
}
