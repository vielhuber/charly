import Helper from '../global/Helper';

export default class Tasks {
    route = '/tasks';

    async init() {
        this.$content = document.querySelector('.content');
        await this.preloadData();
        await this.buildHtml();
        Helper.updateTitle('Tasks');
    }

    async preloadData() {
        this.response = await Helper.fetch('/api/tasks', {
            method: 'GET'
        });
        this.skills = await Helper.fetch('/api/skills', {
            method: 'GET'
        });
        this.knowledge = await Helper.fetch('/api/knowledge', {
            method: 'GET'
        });
        this.providers = await Helper.fetch('/api/providers', {
            method: 'GET'
        });
    }

    async buildHtml() {
        let html = '';

        html += '<h2>Tasks</h2>';

        html += '<ul class="drag-and-drop-list">';
        this.response.data.forEach(data__value => {
            html += '<li>';
            html += `
                <span class="drag-and-drop-list__handle">☰</span>

                ${JSON.stringify(data__value)} -

                <form
                    class="general-form"
                    method="post"
                    action="/api/tasks/update"
                >
                    <input type="hidden" name="id" value="${data__value.id}" />
                    <input type="text" readonly="readonly" required="required" name="order" value="${data__value.order}" placeholder="Order..." />

                    <input type="text" required="required" name="name" value="${data__value.name}" placeholder="Name..." />
                    <input type="text" required="required" name="schedule" value="${data__value.schedule}" placeholder="* * * * *" />
                    <button type="submit">Update</button>
                </form>

                <form
                    class="general-form"
                    method="post"
                    action="/api/tasks/delete"
                >
                    <input type="hidden" name="id" value="${data__value.id}" />
                    <button class="delete">Delete</button>
                </form>
            `;

            // skills
            html += '<h3>Skills</h3>';
            html += '<ul class="drag-and-drop-list">';
            data__value.tasks_skills.forEach(tasks_skills__value => {
                html += '<li>';
                html += `
                    <span class="drag-and-drop-list__handle">☰</span>

                    ${JSON.stringify(tasks_skills__value)} -

                    <form
                        class="general-form"
                        method="post"
                        action="/api/tasks-skills/update"
                    >
                        <input type="hidden" name="id" value="${tasks_skills__value.id}" />
                        <input type="text" readonly="readonly" required="required" name="order" value="${tasks_skills__value.order}" placeholder="Order..." />

                        <input type="text" readonly="readonly" required="required" name="task_id" value="${tasks_skills__value.task_id}" />
                        ${Helper.buildSelect('skill_id', this.skills?.data?.mcpServers, tasks_skills__value.skill_id)}
                        <button type="submit">Update</button>
                    </form>

                    <form
                        class="general-form"
                        method="post"
                        action="/api/tasks-skills/delete"
                    >
                        <input type="hidden" name="id" value="${tasks_skills__value.id}" />
                        <button class="delete">Delete</button>
                    </form>
                `;

                html += '</li>';
            });
            html += '</ul>';
            html += '<h3>Neuen Skill anlegen</h3>';
            html += `
                <form
                    class="general-form"
                    method="post"
                    action="/api/tasks-skills/create"
                    data-clear-form
                >
                    <input type="text" readonly="readonly" required="required" name="task_id" value="${data__value.id}" />
                    ${Helper.buildSelect('skill_id', this.skills?.data?.mcpServers)}
                    <button type="submit">Create</button>
                </form>
            `;

            // knowledge
            html += '<h3>Knowledge</h3>';
            html += '<ul class="drag-and-drop-list">';
            data__value.tasks_knowledge.forEach(tasks_knowledge__value => {
                html += '<li>';
                html += `
                    <span class="drag-and-drop-list__handle">☰</span>

                    ${JSON.stringify(tasks_knowledge__value)} -

                    <form
                        class="general-form"
                        method="post"
                        action="/api/tasks-knowledge/update"
                    >
                        <input type="hidden" name="id" value="${tasks_knowledge__value.id}" />
                        <input type="text" readonly="readonly" required="required" name="order" value="${tasks_knowledge__value.order}" placeholder="Order..." />

                        <input type="text" readonly="readonly" required="required" name="task_id" value="${tasks_knowledge__value.task_id}" />
                        ${Helper.buildSelect('knowledge_id', this.knowledge?.data, tasks_knowledge__value.knowledge_id)}
                        <button type="submit">Update</button>
                    </form>

                    <form
                        class="general-form"
                        method="post"
                        action="/api/tasks-knowledge/delete"
                    >
                        <input type="hidden" name="id" value="${tasks_knowledge__value.id}" />
                        <button class="delete">Delete</button>
                    </form>
                `;

                html += '</li>';
            });
            html += '</ul>';
            html += '<h3>Neuen Knowledge anlegen</h3>';
            html += `
                <form
                    class="general-form"
                    method="post"
                    action="/api/tasks-knowledge/create"
                    data-clear-form
                >
                    <input type="text" readonly="readonly" required="required" name="task_id" value="${data__value.id}" />
                    ${Helper.buildSelect('knowledge_id', this.knowledge?.data)}
                    <button type="submit">Create</button>
                </form>
            `;

            // providers
            html += '<h3>Providers</h3>';
            html += '<ul class="drag-and-drop-list">';
            data__value.tasks_providers.forEach(tasks_providers__value => {
                html += '<li>';
                html += `
                    <span class="drag-and-drop-list__handle">☰</span>

                    ${JSON.stringify(tasks_providers__value)} -

                    <form
                        class="general-form"
                        method="post"
                        action="/api/tasks-providers/update"
                    >
                        <input type="hidden" name="id" value="${tasks_providers__value.id}" />
                        <input type="text" readonly="readonly" required="required" name="order" value="${tasks_providers__value.order}" placeholder="Order..." />

                        <input type="text" readonly="readonly" required="required" name="task_id" value="${tasks_providers__value.task_id}" />
                        ${Helper.buildSelect('provider_id', this.providers?.data, tasks_providers__value.provider_id)}
                        <button type="submit">Update</button>
                    </form>

                    <form
                        class="general-form"
                        method="post"
                        action="/api/tasks-providers/delete"
                    >
                        <input type="hidden" name="id" value="${tasks_providers__value.id}" />
                        <button class="delete">Delete</button>
                    </form>
                `;

                html += '</li>';
            });
            html += '</ul>';
            html += '<h3>Neuen Provider anlegen</h3>';
            html += `
                <form
                    class="general-form"
                    method="post"
                    action="/api/tasks-providers/create"
                    data-clear-form
                >
                    <input type="text" readonly="readonly" required="required" name="task_id" value="${data__value.id}" />
                    ${Helper.buildSelect('provider_id', this.providers?.data)}
                    <button type="submit">Create</button>
                </form>
            `;

            html += '</li>';
        });
        html += '</ul>';

        html += '<h3>Neuen Task anlegen</h3>';

        html += `
            <form
                class="general-form"
                method="post"
                action="/api/tasks/create"
                data-clear-form
            >
                <input type="text" required="required" name="name" value="" placeholder="Name..." />
                <input type="text" required="required" name="schedule" value="" placeholder="* * * * *" />
                <button type="submit">Create</button>
            </form>
        `;

        this.$content.innerHTML = html;
    }
}
