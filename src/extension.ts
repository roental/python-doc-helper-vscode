import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('python-doc-helper.insertDocstring', () => {
        const editor = vscode.window.activeTextEditor;
        
        if (editor) {
            const position = editor.selection.active;
            
            const docstring = `def function_name(param1, param2):
    """
    Описание функции.
    
    Параметры:
        param1 - описание первого параметра
        param2 - описание второго параметра
    
    Пример вызова:
        function_name(value1, value2)
        Результат: описание результата
    """
    pass`;
            
            editor.edit(editBuilder => {
                editBuilder.insert(position, docstring);
            });
            
            vscode.window.showInformationMessage('Шаблон функции добавлен!');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
