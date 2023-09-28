(function(){

  const template = document.createElement("template");
  template.id = "warning-banner-template";
  template.innerHTML= `
  <style>
  .main__cardbody{
    position: relative;
    top:0%;
    margin:auto auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color: yellow;
    color: black;
    width:50%;
        padding:1REM;
    
        border: 10px solid black;
        border-image: repeating-linear-gradient(
          -55deg,
          #000,
          #000 20px,
          #ffb101 20px,
          #ffb101 40px
        ) 10;
  }
  
  [name="main__cardbody--headline"]::slotted(span)
  {
    font-family: "Helvetica", sans-serif;
    width:200px;
    font-weight: 900;
    font-size: 3em;
    text-align:center;
  }
  [name="main__cardbody--content"]::slotted(span)
  {
    font-family: "Helvetica", sans-serif;
    font-weight: 600;
    font-size: 1.5em;
    text-align:center;
  }



  </style>
  <div class="main__cardbody">
   
  <h3 class="main__cardbody--headline"><slot name="main__cardbody--headline"></slot></h3>
  <p class="main__cardbody--content"><slot name="main__cardbody--content"></slot></p>
  </div>
  `;
  document.body.appendChild(template);



  window.customElements.define("warning-banner",
     class WarningBanner extends HTMLElement{
    constructor() {
          super();
          this.attachShadow({ mode: "open" });
               }

    connectedCallback() {
            const tmpl = document.getElementById ("warning-banner-template");
            const node = document.importNode(tmpl.content, true);
            this.shadowRoot.appendChild(node);
          }
             });


})();
