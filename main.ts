import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class ChangeNumbers extends Plugin {
	async onload() {
		this.changeNumbersInFoldersName();

		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'change-numbers-in-folders-name',
			name: 'Change numbers',
			callback: () => {
				this.changeNumbersInFoldersName();
			}
		});
	}

	onunload() {
	}

	changeNumbersInFoldersName() {
		// Отримуємо всі елементи <div> з класом nav-folder-title-content
		var elements = document.querySelectorAll('.nav-folder-title-content');

		// Перебираємо кожен елемент
		elements.forEach(function (element) {
			// Отримуємо текстовий контент кожного елемента
			var text = element.textContent || "";

			// Застосовуємо регулярний вираз для пошуку цифр і заміни їх на вказаний шаблон
			// var modifiedText = text.replace(/(\d)/g, '<span class="numbers-in-folder-name">$1</span>');
			var modifiedText = text.replace(/(\d+)/g, function (v) {
				return "<span class='numbers-in-folder-name'>" + v + "</span>";
			});

			// Замінюємо вміст елемента на модифікований текст з числами в <span> тегах
			element.innerHTML = modifiedText;
		});
	}
}
