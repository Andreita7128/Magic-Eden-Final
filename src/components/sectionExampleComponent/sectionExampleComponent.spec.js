import "./sectionExampleComponent.js";

describe('SectionComponent', () => {

    it('renders the component and sets the params', () => {

        // Arange
        const name = 'nameSection'
        const description = 'description'
        const section = document.createElement('section-example-component')

        // Act
        section.setAttribute('name', name)
        section.setAttribute('description', description)
        section.setAttribute('background', 'cyan')
        document.body.append(section)

        // Assert 
        expect(section.querySelector('h2').textContent).toEqual('The hardcoded subtitle')
        expect(section.querySelector('h1').textContent).toEqual(name)
        expect(section.querySelector('p').textContent).toEqual(description)
        expect(section.querySelector('section').style.backgroundColor).toEqual('cyan')

    })
})