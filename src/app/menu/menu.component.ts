import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public logo = '';

  public logoSrc = 'iVBORw0KGgoAAAANSUhEUgAABJoAAAD+CAQAAADYSqdSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTEwLTAzVDIwOjE0OjIwLTAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTEwLTAzVDIwOjE0OjIwLTAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMC0wM1QyMDoxNDoyMC0wMzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplZWZhY2Y1Ny04NjY0LTFhNGMtYmI5Yi1iMDZkNDcyMTY1NDQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozNTNhNTAxNS1jMzlkLTEyNDAtYTQ2ZC1iZjA4NzA4MDZlMTEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1OTZiZjc2Zi0wYjhlLTUyNDEtODUwZS00ZDE3MmY3N2IzNjMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5NmJmNzZmLTBiOGUtNTI0MS04NTBlLTRkMTcyZjc3YjM2MyIgc3RFdnQ6d2hlbj0iMjAyMC0xMC0wM1QyMDoxNDoyMC0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjIgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplZWZhY2Y1Ny04NjY0LTFhNGMtYmI5Yi1iMDZkNDcyMTY1NDQiIHN0RXZ0OndoZW49IjIwMjAtMTAtMDNUMjA6MTQ6MjAtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4yIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz76yGVpAABZLUlEQVR42u29CVxW1fb/T+Y18+81v16/5vXr9WdOkZmRopGiEXGNyIzI1IgUzQiNa2RmZEQSmZqZU141I0UzIzUl59Scp5wjQkJ6SMscyjln2P+DsNfeDzzA8/CcYe991vm8Xr1M4Zyz9trD++xhLR/yG5H5Kiyja+QquUj+JIdJFtlCPicjydOkpY+Pi5/0XgXa01wpvzz56H6RJZq1leuKIaV/mZzhdMLJ1jyyn9M+ssFJX2vvzfQZmc3pv2Qip7GaB5neJPGchpBoJ4U7KZgE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';
  constructor() { }

  ngOnInit(): void {
    this.logo = 'data:image/png;base64,' + this.logoSrc;
  }

}
