/**
 * The program is the class
 * for JacksonStacks
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-04
 */

class JacksonStack {
  // private array creation
  private readonly stackClass: number[] = []

  // returns array
  StackArray(): number[] {
    return this.stackClass
  }

  // gathers pushed number
  Push(pushedNum: number): void {
    this.stackClass.push(pushedNum)
  }

  // pops top number
  Pop(): number | undefined {
    return this.stackClass.pop()
  }
}

// exports file back to main
export = JacksonStack
